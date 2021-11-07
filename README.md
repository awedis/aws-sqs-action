# AWS SQS action
This action sends message to AWS SQS
[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)

#### Inputs
  * `accessKeyId` (**Required** - Access Key Id)
  * `secretAccessKey` (**Required** - Secret Access Key)
  * `region` (**Required** - Region)
  * `url` (**Required** - SQS url to send message)
  * `message` (**Required** - The message to send)

## Example
```yaml
name: Test SQS
on: [push]

jobs:
  sqs_job:
    runs-on: ubuntu-latest
    name: test sqs action
    steps:
      - name: Checkout [step]
        uses: actions/checkout@v2
      - name: SQS Action [step]
        uses: awedis/aws-sqs-action@v1.4
        id: sqs
        with:
          accessKeyId: ${{ secrets.AWS_ACCESS_KEY_ID }}
          secretAccessKey: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          region: ${{ secrets.REGION }}
          url: ${{ secrets.SQS_URL }}
          message: 'test message from sqs action'
```