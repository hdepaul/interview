#!/bin/bash

if [ "${CIRCLE_BRANCH}" == "develop" ]
then
  export DEPLOY_URL=${DEPLOY_URL_DEV}
  npm run build -- --prod --progress=false  --configuration=dev
elif [ "${CIRCLE_BRANCH}" == "candidate" ]
then
  export DEPLOY_URL=${DEPLOY_URL_QA}
  npm run build -- --prod --progress=false --configuration=qa
elif [ "${CIRCLE_BRANCH}" == "master" ]
then
  export DEPLOY_URL=${DEPLOY_URL_PROD}
  npm run build -- --prod --progress=false --configuration=production
elif [ "${CIRCLE_BRANCH}" == "uat" ]
then
  export DEPLOY_URL=${DEPLOY_URL_UAT}
  npm run build -- --prod --progress=false --configuration=uat
fi