---
id: intro
title: Introduction to NexClipper
sidebar_label: Introduction to NexClipper
slug: /
hide_title: true
keywords:
  - mission
  - vision
  - product
  - nexclipper
---

# Introdution NexClipper

## NexClipper

NexClipper is an Open Source project aimed at delivering production-ready Prometheus in enterprise environments.

### Mission

NexClipper helps our customers to manage their Cloud Native infrastructure easily, reliably and at scale which leads to decreased downtime, lower operation costs, and improved business sustainability.

### Vision

**Automated Enterprise Prometheus Eco-System**

A leading enterprise infrastructure software company in cloud native computing.  
With NexClipper, we contribute to cloud native community and help DevOps teams work simple and fast.

### Basic Architecture

NexClipper is under development with the following roadmap to solve the problems the current Prometheus ecosystem has. We are working hard to add new features while maintaining our existing open source and solutions.

![img](../static/img/architecture_outline3_layer.png)

The following features are currently being developed.

### Products

#### Provbee

Prometheus ecosystem can be quickly and easily deployed in any production environment. ([https://github.com/NexClipper/provbee](https://github.com/NexClipper/provbee))  
- NexClipper Cloud allows you to quickly and easily deploy Prometheus ecosystem through a simple installation command.
- NexClipper On-Premise provides a separate Prometheus server cluster and various ecosystem installation and operation environments in multiple multi-cloud environments.
- Long-term storage can be configured based on open source softwares. (To avoid vendor dependency)
- Provisioned based on PromScale, which is composed of TimescaleDB, and storage period and capacity can be increased whenever necessary.
 
#### Klevr
Similar to the Bastion Host role, even in a private network such as a firewall, the open source-based Task Manager([https://github.com/NexClipper/klevr](https://github.com/NexClipper/klevr)) executes asynchronous jobs, so it can be operated in a private cloud environment.  
- Separate charts or resources can be directly distributed, and operation is possible in a private environment that is isolated for security reasons.
- Cluster management or operation is possible without direct access to KubeAPI.
- Remotely modify and manage Prometheus and AlertManager config.

#### ExporterHub
Consolidated Exporters database and catalog.
- With the ability to manage exporters, you can easily install and configure AlertRule for operation. [ExporterHub.io](https://ExporterHub.io), [https://github.com/NexClipper/exporterhub.io](https://github.com/NexClipper/exporterhub.io)


#### PromLens (Bundle) 
NexClipper provides convenient functions related to queries and rules. Also, Promlens is the power tool for querying Prometheus.
- Promlens([https://github.com/promlabs/promlens-public](https://github.com/promlabs/promlens-public)) Preview features are included so you can write and test simple queries. If you unlock commercial features, contact us.


### Objective

#### Automated Enterprise Prometheus ecosystem
- Architecture Diagram overview(_Image click to go youtube_)
[![Architecture Diagram](https://raw.githubusercontent.com/NexClipper/nexclipper.github.io/master/assets/nexclipper_architecture_overview.png)](https://youtu.be/Z_71FC8iOu0)

- Managing Prometheus and its ecosystem easily, reliably, and at scale
  - It is necessary to run a proper monitoring tool after the initial Kubernetes test or POC.
  - As Kubernetes ecosystem is getting more complicated with more OSS, it’s not easy to organize internal monitoring tools.

- Providing advanced technologies essential for production environments
  - MetricOps enables automation of all operation based on metrics, and ML-based prediction.
  - GitOps, without dependency on environments and neutral to SLO, easily execute deployment and roll-back.

- Delivering software in any types of environment.
  - NexClipper SaaS platform can manage [Public | Private] cloud, and on-premise altogether.
  - As an ambassador to microservices, it provides efficient deployment and monitoring service for more efficient operation and business.
