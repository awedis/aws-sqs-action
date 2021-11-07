# AWS SQS action
This action sends message to AWS SQS

#### Inputs
  * `url` (**Required** SQS url to send message)
  * `message` (**Required** The message to send)

## Example
```yaml
name: Test SQS
on: [push]

jobs:
  sqs_job:
    runs-on: ubuntu-latest
    name: test sqs action
    steps:
      - name: AWS Auth [step]
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ secrets.REGION }}
      - name: Checkout [step]
        uses: actions/checkout@v2
      - name: SQS Action [step]
        uses: awedis/sqs@v1.1
        id: sqs
        with:
          url: ${{ secrets.SQS_URL }}
          message: 'this is test mressage from sqs action'
```