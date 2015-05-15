set BACUP_DYREKTORY_LOCAL_MASHINE=/cygdrive/c/1
set USERNAME_ON_SERVER=gordondalos
set BACKUP_SERVER=192.168.0.104
set DYRECTORY_BACKUP_SERVER=/home/gordondalos/mybackup
set PATH_TO_SSH=/usr/bin/ssh
set PATH_TO_RSYNC_FROM_WINDOWS=C:\Cygwin\bin\rsync



:: так пишутся коменты
rem И так пишутся коменты
::set PATH_TO_SECRET_FILE=/cygdrive/c/rsyncd.scrt
::--password-file=/usr/local/etc/rsyncd.scrt
::sshpass -p "abcdef"


%PATH_TO_RSYNC_FROM_WINDOWS%  -e %PATH_TO_SSH% -vrtz %BACUP_DYREKTORY_LOCAL_MASHINE% %USERNAME_ON_SERVER%@%BACKUP_SERVER%:%DYRECTORY_BACKUP_SERVER%
pause