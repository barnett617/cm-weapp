#!/bin/bash
#!/bin/scp
#!/usr/bin/expect -f
npm run build
rf -rf ./release.tgz
tar -zcvf ./release.tgz .
echo "**************** build completed ****************"
expect -c "
  spawn scp -r ./release.tgz root@148.70.54.126:/www/server/node
  expect {
    \"*assword\" {set timeout 300; send \"Root1234\r\";}
    \"yes/no\" {send \"yes\r\"; exp_continue;}
  }
  expect eof"
echo "**************** scp 结束 ********************"