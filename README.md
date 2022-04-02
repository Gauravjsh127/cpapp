# Welcome

Welcome to this tutorial for application development on SAP Business Technology Platform (SAP BTP). 

It contains these folders and files, following our recommended project layout:

| Component      | Root directory       |Purpose                                   |
| -------------- | -------------------- |--------------------------------------------------- |
| Web App        | [app](app)           |content for UI frontends goes here                  |
| srv            | [srv](srv)           |your service models and business logic go here      |
| router         | [router](router)     |your application routes and code go here  |
| db             | [db](db)             |your domain models and data go here       |

## Requirements

-   [Node.js](https://nodejs.org/en/download/)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for dependency management
-   install [@sap/cds-dk](https://www.npmjs.com/package/@sap/cds-dk) globally
-   install [@ui5/cli](https://www.npmjs.com/package/@ui5/cli) globally


## Download and Installation 

1. Clone the project:

```sh
git clone https://github.com/Gauravjsh127/cpapp.git
cd cpapp
```

2. In the cpapp folder, use npm (or yarn) to install the dependencies:

```sh
npm install
```
For dev packacges use the command : npm install package-name --save-dev


## Run, Build and Deploy the App

### Run the App locally

```sh

    cds deploy --to sqlite:test.db // optional in case of db changes
    cds watch

```


### Setup CI/CD

Follow the steps mention in this README : https://github.com/SAP-samples/s4hana-btp-extension-devops/tree/mission/10-SetupCICD


### Build the MTA and Deploy to Cloud Foundry

> Additional preparation steps and tools are required to deploy the application to SAP BTP, Cloud Foundry environment. For more information and guidance on the initial setup, please have a look at these tutorials and resources:
>
> -   [Create a trial account on SAP BTP](https://developers.sap.com/tutorials/hcp-create-trial-account.html)
> -   [Create SAP HANA Cloud Service instance](https://developers.sap.com/tutorials/btp-app-hana-cloud-setup.html#08480ec0-ac70-4d47-a759-dc5cb0eb1d58)
> -   [Install Cloud Foundry CLI](https://developers.sap.com/tutorials/cp-cf-download-cli.html)
> -   [Install MultiApps CF CLI Plugin](https://github.com/cloudfoundry-incubator/multiapps-cli-plugin)
> -   [Install Cloud MTA Build Tool](https://sap.github.io/cloud-mta-build-tool/download/)
> -   [Follow the steps given in the Tutorial](https://developers.sap.com/tutorials/btp-app-cap-mta-deployment.html)
```sh
mbt build -t ./
```

```sh
cf8 login
cf8 deploy XXXXX.mtar
```
