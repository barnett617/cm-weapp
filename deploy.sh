#!/bin/bash
#!/bin/scp
#!/usr/bin/expect -f
rm -rf ./release.tgz
npm run build
echo "**************** build completed ****************"
tar -zcvf ./release.tgz .
expect -c "
  set timeout -1
  spawn scp -r ./release.tgz root@148.70.54.126:/www/server/node
  expect {
    \"*assword\" {set timeout 300; send \"Root1234\r\";}
    \"yes/no\" {send \"yes\r\"; exp_continue;}
  }
  expect eof"
echo "**************** scp 结束 ********************"