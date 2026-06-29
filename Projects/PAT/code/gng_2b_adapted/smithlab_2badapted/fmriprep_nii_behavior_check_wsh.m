% created 3-1-2024 by Jen Yang
% last modified 3-1-2024 by Jen Yang
% last modified Dec. 04, 24 by Shenghan
% to check data availability of incoming new data before running any analyses
% 1. fmriprep availability - must have for anything else
% 2. imaging data availability - check if both runs exist, list out subs by
% run availability
% 3. behavior data availability - same as above
% output
% 1. sub_BothRuns.txt - subject list with both runs available for analyses
% 2. sub_OnlyRunOne.txt - subject list with run 1 available for analyses
% 3. sub_OnlyRunTwo.txt - subject list with run 2 available for analyses

%% check fmriprep availability & grab task independent initial raw sublist there
task='trust';
%task='sharedreward'
fmriprep_dir = "/ZPOOL/data/projects/rf1-sra-data/derivatives/fmriprep";
file_list = dir(fmriprep_dir);
file_list_cell = struct2cell(file_list);
[~,N_row] = size(file_list_cell);
sub_list = file_list_cell(1,:);
isdir_list = file_list_cell(5,:);
sub_list_clean = [];
% sub_list_clean_N = 0;
for i = 1:N_row
    % i = 11;
    isdir_i = isdir_list{i};
    if isdir_i > 0
        sub_list_i = sub_list{i};
        sub_ID_i = sscanf(sub_list_i,"sub-%d");
        sub_list_clean = [sub_list_clean, sub_ID_i];
        % sub_list_clean(sub_list_clean_N) = sub_ID_i;
    end
end

%% check confound, imaging data using the sub_list_clean generated
[~,N_sub] = size(sub_list_clean);
% tedanna confound
%confound_dir = "/ZPOOL/data/projects/sharedreward-aging/derivatives/tedana/";
%regular confound
confound_dir="/ZPOOL/data/projects/rf1-sra-data/derivatives/fsl/confounds/";

if task=='trust'
    behavior_dir = "/ZPOOL/data/projects/rf1-sra/stimuli/Scan-Investment_Game/logs";
elseif task=='sharedreward'
    behavior_dir = "/ZPOOL/data/projects/rf1-sra/stimuli/Scan-Card_Guessing_Game/logs";
end

brain_dir = "/ZPOOL/data/projects/rf1-sra-data/bids/";

for n = 1:N_sub
     % n = 74
    subID_n = sub_list_clean(1,n);
    for r = 1:2
        % r = 1;
        % check confound data availability
        

        %Tedanna confound naming convention:
        file_confound_n_r = fullfile(...
            confound_dir, ...
            sprintf("sub-%d", subID_n), ...
            sprintf("sub-%d_task-%d_run-%d_part-mag_desc-fslConfounds.tsv",subID_n,task,r));
            %tedanna: "sub-%d_task-sharedreward_run-%d_desc-confounds_timeseries.tsv"

        
        % regular cfd naming
        % file_confound_n_r = fullfile(...
        %     confound_dir, ...
        %     sprintf("sub-%d", subID_n), ...
        %     sprintf("sub-%d_task-sharedreward_run-%d_part-mag_desc-fslConfounds.tsv",subID_n,r));
        if isfile(file_confound_n_r) == 0
            disp(sprintf("sub %d %d run %d confound missing", subID_n,task, r))
        end
        % check behavior data availability
        file_behavior_n_r = fullfile(...
            behavior_dir,...
            num2str(subID_n), ...
            sprintf("sub-%d_task-%d_run-%d_raw.csv", subID_n,task,r));
        if isfile(file_behavior_n_r) == 0
            disp(sprintf("sub %d %d run %d behavior missing", subID_n, task, r))
        end
        % check frmi data availability
        file_brain_n_r = fullfile(...
            brain_dir,sprintf("sub-%d/func", subID_n), ...
            sprintf("sub-%d_task-%d_run-%d_echo-1_part-mag_bold.nii.gz", subID_n,task,r));
        if isfile(file_brain_n_r) == 0
            disp(sprintf("sub %d %d run %d brain missing", subID_n, task, r))
        end
        % mark runs with both behavior and brain data available
        sub_list_clean(r+1,n) = ...
            isfile(file_confound_n_r) .* ...
            isfile(file_behavior_n_r).* ...
            isfile(file_brain_n_r);
    end
end

sub_list_clean(4,:) = sub_list_clean(2,:) + sub_list_clean(3,:);
sub_all = sub_list_clean(1,:);
sub_BothRuns = sub_list_clean(1,sub_list_clean(4,:) == 2);
sub_OnlyRunOne = sub_list_clean(1,sub_list_clean(4,:) == 1 & sub_list_clean(2,:) == 1);
sub_OnlyRunTwo = sub_list_clean(1,sub_list_clean(4,:) == 1 & sub_list_clean(3,:) == 1);

sub_all = array2table(sub_all');
sub_BothRuns = array2table(sub_BothRuns');
sub_OnlyRunOne = array2table(sub_OnlyRunOne');
sub_OnlyRunTwo = array2table(sub_OnlyRunTwo');

code_dir = "/ZPOOL/data/projects/r01-soi/code";


listname{1}={sprintf('sub_all_%d_%d.txt',task,datestr('mm-dd-tt'))};
listname{2}={'sub_BothRuns_%d_%d.txt',task,};
listname{3}={'sub_OnlyRunOne_%d_%d.txt',task,};
listname{4}={'sub_OnlyRunTwo_%d_%d.txt',task,};

% writetable(sub_all,...
%     fullfile(code_dir,'sub_all_tedanna_120424.txt'),'Delimiter',' ', 'WriteVariableNames',false);
% writetable(sub_BothRuns,...
%     fullfile(code_dir,'sub_BothRuns_tedanna_120424.txt'),'Delimiter',' ', 'WriteVariableNames',false);
% writetable(sub_OnlyRunOne,...
%     fullfile(code_dir,'sub_OnlyRunOne_tedanna_120424.txt'),'Delimiter',' ', 'WriteVariableNames',false);
% writetable(sub_OnlyRunTwo,...
%     fullfile(code_dir,'sub_OnlyRunTwo_tedanna_120424.txt'),'Delimiter',' ', 'WriteVariableNames',false);
% 
writetable(sub_all,...
    fullfile(code_dir,listname{1},'Delimiter',' ', 'WriteVariableNames',false);
writetable(sub_BothRuns,...
    fullfile(code_dir,listname{2}),'Delimiter',' ', 'WriteVariableNames',false);
writetable(sub_OnlyRunOne,...
    fullfile(code_dir,listname{3}),'Delimiter',' ', 'WriteVariableNames',false);
writetable(sub_OnlyRunTwo,...
    fullfile(code_dir,listname{3}),'Delimiter',' ', 'WriteVariableNames',false);






