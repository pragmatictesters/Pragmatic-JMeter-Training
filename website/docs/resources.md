---
id: resources
title: Resources
sidebar_label: 🔗 Resources
sidebar_position: 6
description: Every link a JMeter trainee needs in one place, with a line on when to use each.
---

Every link you need while learning and using JMeter, in one place. Each one has a line on **when to reach for it**.

:::tip[New here?]

Start with the [training videos](#training), keep the [Cheat Sheet](./cheat-sheet.md) open while you work, and use `Ctrl + K` (`⌘ + K`) to search this site's [JMeter reference](./reference/index.md).

:::

## 🏛️ Official Apache JMeter {#official}

| Link | When to use it |
|------|----------------|
| [Apache JMeter website](https://jmeter.apache.org/) | The home of JMeter: news, documentation and downloads. |
| [Download JMeter](https://jmeter.apache.org/download_jmeter.cgi) | Get the latest release. Pick the **Binaries** zip or tgz, not the source. |
| [User Manual](https://jmeter.apache.org/usermanual/index.html) | The full official manual. This site's [Reference](./reference/index.md) is a searchable copy of its component, function and property pages. |
| [Getting Started](https://jmeter.apache.org/usermanual/get-started.html) | Installing JMeter, Java requirements and all command-line options. |
| [Best Practices](https://jmeter.apache.org/usermanual/best-practices.html) | Read before your first real load test: CLI mode, lean listeners, variables. |
| [Hints and Tips](https://jmeter.apache.org/usermanual/hints_and_tips.html) | Short official answers to common "how do I…" questions. |
| [HTML Dashboard Report](https://jmeter.apache.org/usermanual/generating-dashboard.html) | Generating and configuring the HTML report (`-e -o` or `-g`). |
| [Real-time results](https://jmeter.apache.org/usermanual/realtime-results.html) | Streaming live results to InfluxDB and Grafana with the Backend Listener. |
| [Release notes](https://jmeter.apache.org/changes.html) | What changed in each version. Check before you upgrade. |
| [JMeter on GitHub](https://github.com/apache/jmeter) | Source code. Report bugs or request features in its [issues](https://github.com/apache/jmeter/issues). |

## 🔌 Plugins {#plugins}

| Link | When to use it |
|------|----------------|
| [JMeter Plugins Manager](https://jmeter-plugins.org/wiki/PluginsManager/) | Install, update and remove plugins from inside JMeter (**Options → Plugins Manager**). Drop `jmeter-plugins-manager.jar` into `lib/ext` and restart. See [TOD#004](./tips.md#tod004) for proxy and command-line installs. |
| [jmeter-plugins.org catalogue](https://jmeter-plugins.org/) | Browse what's available: Custom Thread Groups (Concurrency, Ultimate, Arrivals), extra graphs, Throughput Shaping Timer, PerfMon and more. |

:::note

Only install the plugins a test plan actually needs. Everyone who runs the plan (teammates, CI, load generators) needs the same plugins installed.

:::

## 🎓 Pragmatic training {#training}

| Link | When to use it |
|------|----------------|
| [JMeter training videos on YouTube](https://www.youtube.com/playlist?list=PL3SFAeUgUKa2CzViB2z1EYW-X-1aevRaG) | Step-by-step video lessons that go with this course. Watch them in order, then come back here to look things up. |
| [Pragmatic Test Labs](https://pragmatictestlabs.com/) | Articles and training on software testing and performance testing. |
| [Glossary for Performance Testers (2023)](https://pragmatictestlabs.com/2023/02/25/glossary_for_performance_testers/) | The original article behind this site's [Glossary](./glossary.md). |
| [Training repository](https://github.com/pragmatictesters/Pragmatic-JMeter-Training) | The test plans, test data and these docs. Clone it to follow along. |

## ☁️ Run JMeter tests in the cloud {#cloud}

When one machine can't generate enough load, run your `.jmx` across many cloud load generators.

| Link | When to use it |
|------|----------------|
| [RedLine13](https://www.redline13.com/) | Low-cost way to run your existing JMeter plans on your own AWS instances. Good for bigger tests on a training budget. |
| [BlazeMeter](https://www.blazemeter.com/) | Commercial platform that runs JMeter at scale, with reporting and CI integrations. |
| [Azure Load Testing](https://azure.microsoft.com/en-us/products/load-testing) | Managed Azure service that runs JMeter scripts, handy if your system already lives in Azure. Docs: [Microsoft Learn](https://learn.microsoft.com/en-us/azure/load-testing/). |

## 📈 Monitoring and reporting {#monitoring}

| Link | When to use it |
|------|----------------|
| [Real-time results with InfluxDB and Grafana](https://jmeter.apache.org/usermanual/realtime-results.html) | Watch a long test live instead of waiting for the report. Uses the [Backend Listener](./reference/components/listeners.md#Backend_Listener). |
| [Grafana dashboard for JMeter (ID 5496)](https://grafana.com/grafana/dashboards/5496-apache-jmeter-dashboard-by-ubikloadpack/) | A ready-made Grafana dashboard for Backend Listener data. Import it instead of building your own. |
| [InfluxDB](https://www.influxdata.com/) | The time-series database the Backend Listener writes to. |
| [HTML Dashboard Report](https://jmeter.apache.org/usermanual/generating-dashboard.html) | The report to share after every run. Needs CSV results ([TOD#010](./tips.md#tod010)). |

## 🧪 Practice targets {#practice}

Only load test systems you own or have written permission to test. The public demo sites below are fine for **functional** practice and scripting with a handful of users. **Do not** point a real load test at them.

| Link | When to use it |
|------|----------------|
| [Contact List App](https://thinking-tester-contact-list.herokuapp.com/) | A REST API with login, tokens and CRUD. Great for correlation and data-driven tests. API docs: [Postman](https://documenter.getpostman.com/view/4012288/TzK2bEa8). |
| [Restful Booker](https://restful-booker.herokuapp.com/) | A small booking API built for testing practice: auth token, create, update, delete. |
| [JSONPlaceholder](https://jsonplaceholder.typicode.com/) | A fake read-only REST API. Quick JSON Extractor and assertion practice. |
| [ReqRes](https://reqres.in/) | A hosted REST API with ready-made users and login responses. |
| [BlazeDemo](https://blazedemo.com/) | A simple flight booking website. Classic for recording with the HTTP(S) Test Script Recorder. |
| [OrangeHRM demo](https://opensource-demo.orangehrmlive.com/) | A real web app with a login and CSRF tokens. Used in this course's recording exercise. |
| [Demoblaze](https://www.demoblaze.com/) | A demo online shop for recording a browse-and-buy journey. |

## 🧰 Related tools {#tools}

| Link | When to use it |
|------|----------------|
| [Datafaker](https://www.datafaker.net/) | Generate realistic test data (names, emails, addresses). See [TOD#008](./tips.md#tod008). |
| [Taurus](https://gettaurus.org/) | Run JMeter from a simple YAML file, and in CI pipelines. |
| [JMeter Java DSL](https://abstracta.github.io/jmeter-java-dsl/) | Write JMeter tests as Java code instead of `.jmx` files. |

## 💬 Community and help {#community}

| Link | When to use it |
|------|----------------|
| [JMeter mailing lists](https://jmeter.apache.org/mail2.html) | Ask the JMeter users list. Search the archives first: most questions are already answered there. |
| [Stack Overflow: jmeter tag](https://stackoverflow.com/questions/tagged/jmeter) | Thousands of answered questions. Include your JMeter version and what you tried when you ask. |
| [JMeter issues on GitHub](https://github.com/apache/jmeter/issues) | Report a bug you can reproduce in the latest release. |
