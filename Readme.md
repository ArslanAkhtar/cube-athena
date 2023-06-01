# Cube.js and AWS Athena Integration

This repository demonstrates the integration of Cube.js, an open-source analytical API platform, with AWS Athena, a serverless query service for analyzing data in Amazon S3. The integration allows you to leverage the power of AWS Athena to process and query large datasets using Cube.js as the query orchestration layer.

## Prerequisites

Before getting started, ensure that you have the following prerequisites installed and configured:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [Cube.js CLI](https://github.com/cube-js/cube.js#installation)
- AWS account with access to Athena and S3 services
- AWS CLI configured with valid credentials

## Getting Started

Follow these steps to set up and run the integration locally:

1. Clone this repository to your local machine:

````bash
git clone https://github.com/ArslanAkhtar/cube-athena.git
cd cube-athena

2. Set up the AWS credentials in your local environment. You can use the AWS CLI or manually create a `~/.aws/credentials` file. Make sure the credentials have the necessary permissions to access Athena and S3.

3. Configure the AWS region by running the following command and providing your desired region:

```bash
npm run configure-aws
```

4. Create a `.env` file in the root directory of the project and provide the necessary environment variables:

```bash
# .env
CUBEJS_AWS_KEY=<YOUR_AWS_ACCESS_KEY_ID>
CUBEJS_AWS_SECRET=<YOUR_AWS_SECRET_ACCESS_KEY>
CUBEJS_AWS_REGION=<YOUR_AWS_REGION>
CUBEJS_AWS_S3_OUTPUT_BUCKET=<YOUR_S3_OUTPUT_BUCKET>
CUBEJS_AWS_S3_TEMP_BUCKET=<YOUR_S3_TEMP_BUCKET>
```

5. Install the project dependencies by running the following command:

```bash
docker-compose build
docker-compose up
````

## Deploying to AWS Lambda

To deploy the Cube.js API to AWS Lambda, follow these steps:

1. Modify the `serverless.yml` file to specify your AWS configuration and deployment options.

2. Run the following command to deploy the Cube.js API to AWS Lambda:

```bash
npm run deploy
```

3. After the deployment is complete, you will receive an endpoint URL for the deployed Cube.js API. Use this URL to access the Cube.js playground and run queries against your data.

## Additional Resources

For more information about Cube.js and AWS Athena integration, refer to the following resources:

- [Cube.js Documentation](https://cube.dev/docs/)
- [AWS Athena Documentation](https://aws.amazon.com/athena/)
- [AWS SDK for JavaScript Documentation](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
