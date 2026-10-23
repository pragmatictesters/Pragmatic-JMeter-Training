# 📖 Performance Testing Glossary

> Performance testing goes wrong when people use the same word for different things.
> "Response time", "latency" and "1,000 users" mean different things to a developer, a network engineer and a business owner.
> Agree the words first, then agree the numbers.
> Written for JMeter trainees and the people they work with. JMeter references verified against **Apache JMeter 5.6.3**.

🔎 **Searching:** press `Ctrl + F` (`Cmd + F` on macOS) on this page, or open [performance-glossary.html](performance-glossary.html) in any browser for a live search box that works offline.

📚 **Related:** [Performance Testing Types](Performance-Testing-Types.md) · [JMeter Tip of the Day](TOD.md)

---

<a id="letters"></a>

## 🔤 Jump to a Letter

[**A**](#letter-a) · [**B**](#letter-b) · [**C**](#letter-c) · [**D**](#letter-d) · [**E**](#letter-e) · [**F**](#letter-f) · [**G**](#letter-g) · [**H**](#letter-h) · [**I**](#letter-i) · [**J**](#letter-j) · [**K**](#letter-k) · [**L**](#letter-l) · [**M**](#letter-m) · [**N**](#letter-n) · [**O**](#letter-o) · [**P**](#letter-p) · [**Q**](#letter-q) · [**R**](#letter-r) · [**S**](#letter-s) · [**T**](#letter-t) · [**U**](#letter-u) · [**V**](#letter-v) · [**W**](#letter-w) · X · Y · Z

**158 terms** across 10 categories.

---

<a id="start-here"></a>

## ⭐ Start Here: Terms Every Stakeholder Must Agree On

Before any test is planned, make sure developers, testers, ops and business owners agree on these words. Most arguments about results come from these terms.

| Term | In one line |
|------|-------------|
| [**Elapsed time**](#elapsed-time) | In JMeter, the time from **just before the request is sent** to **just after the last byte of the response is received**. |
| [**Latency**](#latency) | In JMeter, the time from **just before the request is sent** to **just after the first part of the response is received** (time to first byte). |
| [**Response time**](#response-time) | The time a user or client waits from sending a request to receiving the complete response. |
| [**Average**](#average) | The arithmetic mean: the sum of all values divided by the number of values. |
| [**Percentile**](#percentile) | The value below which a given percentage of samples fall. |
| [**Error rate**](#error-rate) | The percentage of requests that failed: (failed samples / total samples) × 100. |
| [**Payload**](#payload) | The data carried in the **body** of a request or response, not counting headers. |
| [**Ramp-up**](#ramp-up) | The period at the start of a test when load is **gradually increased** to the target level, so the system warms up the way it would in real life. |
| [**Ramp-down**](#ramp-down) | The period at the end of a test when load is **gradually reduced** to zero, instead of stopping every user at once. |
| [**Throughput**](#throughput) | The amount of work a system completes per unit of time, for example **requests per second**, **transactions per second** or **orders per hour**. |
| [**Think time**](#think-time) | The pause a real user takes between actions: reading a page, filling in a form. |
| [**Concurrent users**](#concurrent-users) | Users who are active in the system **during the same period** (logged in, mid-journey), but are not necessarily sending a request at the same instant. |

---

<a id="confused"></a>

## 🤔 Commonly Confused Terms

| Pair | The difference in one line |
|------|----------------------------|
| [Elapsed time](#elapsed-time) vs [Latency](#latency) | Elapsed time runs to the **last** byte of the response. Latency stops at the **first** byte. |
| [Latency](#latency) vs [Round-trip time (RTT)](#round-trip-time) | JMeter latency includes **server processing**. Network latency (RTT) is **network travel time only**. |
| [Response time](#response-time) vs [Page load time](#page-load-time) | JMeter response time is **server + network**. Page load time adds **browser rendering and JavaScript**. |
| [Average](#average) vs [Median](#median) | Average is pulled by slow outliers. Median is the middle value and ignores them. |
| [Median](#median) vs [Percentile](#percentile) | Median = p50, the typical user. p90 / p95 / p99 describe the **slower** users. |
| [Concurrent users](#concurrent-users) vs [Simultaneous users](#simultaneous-users) | Concurrent users are **in the system** together. Simultaneous users **send a request at the same instant**. |
| [Throughput](#throughput) vs [Hits per second](#hits-per-second) | Throughput counts **samples or transactions**. Hits per second counts **every HTTP request**, including embedded resources. |
| [Think time](#think-time) vs [Pacing](#pacing) | Think time is a pause **between steps**. Pacing fixes how often a **whole iteration** starts. |
| [Ramp-up](#ramp-up) vs [Warm-up](#warm-up) | Ramp-up is about **adding users** gradually. Warm-up is about letting **caches and JIT** settle before measuring. |
| [Performance goal](#performance-goal) vs [Performance requirement](#performance-requirement) | A goal is **wanted**. A requirement is **must have**. |
| [Performance target](#performance-target) vs [Performance threshold](#performance-threshold) | A target is **what we aim for**. A threshold is **the worst we accept**. |
| [SLA (Service Level Agreement)](#sla) vs [SLO (Service Level Objective)](#slo) | An SLA is an **external promise**, often with penalties. An SLO is a stricter **internal objective**. |
| [JMeter variables](#jmeter-variables) vs [JMeter properties](#jmeter-properties) | Variables are **per thread**. Properties are **global** to the JMeter instance. |
| [Closed workload model](#closed-model) vs [Open workload model](#open-model) | Closed: a **fixed number of users** loop. Open: users **arrive at a rate** whatever happens. |
| [Stop test](#stop-test) vs [Shutdown test](#shutdown) | Stop **interrupts** threads now. Shutdown lets them **finish the current sample**. |
| [Capacity](#capacity) vs [Scalability](#scalability) | Capacity: **how much** this setup handles. Scalability: **how that changes** when we add resources. |

---

<a id="categories"></a>

## 🗂️ Categories

| Category | Terms |
|----------|-------|
| 🧪 **Test types** | [Baseline testing](#baseline-testing), [Benchmark testing](#benchmark-testing), [Breakpoint testing](#breakpoint), [Capacity testing](#capacity-testing), [Component testing](#component-testing), [Concurrency testing](#concurrency-testing), [Endurance testing](#endurance-testing), [Load testing](#load-testing), [Performance regression testing](#regression-testing), [Performance testing](#performance-testing), [Scalability testing](#scalability-testing), [Smoke testing](#smoke-testing), [Spike testing](#spike-testing), [Stress testing](#stress-testing), [Unit test (performance)](#unit-test), [Validation test](#validation-test), [Volume testing](#volume-testing) |
| ⏱️ **Metrics and timing** | [Apdex](#apdex), [Application-specific metrics](#application-metrics), [Business metrics](#business-metrics), [Connect time](#connect-time), [Elapsed time](#elapsed-time), [Error rate](#error-rate), [Hits per second](#hits-per-second), [Idle time](#idle-time), [Latency](#latency), [Metrics](#metrics), [Network-specific metrics](#network-metrics), [Platform-specific metrics](#platform-metrics), [Response time](#response-time), [Service-level metrics](#service-level-metrics), [Throughput](#throughput), [Timings explained: connect, latency, elapsed](#timings-explained), [Transactions per second (TPS)](#transactions-per-second) |
| 📊 **Statistics** | [Average](#average), [Coordinated omission](#coordinated-omission), [Long tail](#long-tail), [Maximum time](#max), [Median](#median), [Minimum time](#min), [Normal distribution](#normal-distribution), [Outlier](#outlier), [Percentile](#percentile), [Standard deviation](#standard-deviation), [Uniform distribution](#uniform-distribution) |
| 🏋️ **Load modelling** | [Arrival rate](#arrival-rate), [Business transaction](#business-transaction), [Closed workload model](#closed-model), [Concurrent users](#concurrent-users), [Duration](#duration), [Iteration](#iteration), [Little's Law](#littles-law), [Load profile](#load-profile), [Open workload model](#open-model), [Pacing](#pacing), [Peak load](#peak-load), [Ramp-down](#ramp-down), [Ramp-up](#ramp-up), [Scenario](#scenario), [Simultaneous users](#simultaneous-users), [Steady state](#steady-state), [Think time](#think-time), [Transaction mix](#transaction-mix), [User abandonment](#user-abandonment), [Virtual user (VU)](#virtual-user), [Warm-up](#warm-up), [Workload model](#workload-model) |
| 🎯 **Requirements and goals** | [Acceptance criteria](#acceptance-criteria), [KPI (Key Performance Indicator)](#kpi), [NFR (Non-functional requirement)](#nfr), [Performance acceptance criteria](#performance-acceptance-criteria), [Performance budget](#performance-budget), [Performance goal](#performance-goal), [Performance objective](#performance-objective), [Performance requirement](#performance-requirement), [Performance target](#performance-target), [Performance testing objective](#performance-testing-objective), [Performance threshold](#performance-threshold), [SLA (Service Level Agreement)](#sla), [SLO (Service Level Objective)](#slo) |
| 🖥️ **System behaviour and resources** | [Bottleneck](#bottleneck), [Cache](#cache), [Capacity](#capacity), [Connection pool](#connection-pool), [Contention](#contention), [CPU utilization](#cpu-utilization), [Deadlock](#deadlock), [Elasticity](#elasticity), [Garbage collection (GC)](#garbage-collection), [Headroom](#headroom), [Knee point](#knee), [Memory leak](#memory-leak), [Queueing](#queueing), [Resource utilization](#resource-utilization), [Saturation](#saturation), [Scalability](#scalability), [Thread pool](#thread-pool) |
| 🏗️ **Environments and infrastructure** | [Controller (distributed testing)](#controller), [Distributed testing](#distributed-testing), [Load generator](#load-generator), [Production environment](#production-environment), [Staging environment](#staging-environment), [Test environment](#test-environment), [Worker](#worker) |
| 🛠️ **JMeter concepts** | [Active threads](#active-threads), [Aggregate Report](#aggregate-report), [Assertion](#assertion), [Backend Listener](#backend-listener), [Configuration element](#configuration-element), [Constant Throughput Timer](#constant-throughput-timer), [Correlation](#correlation), [CSV Data Set Config](#csv-data-set), [Execution order (JMeter)](#execution-order), [Flow Control Action](#flow-control-action), [HTML dashboard report](#html-dashboard), [JMeter properties](#jmeter-properties), [JMeter variables](#jmeter-variables), [Listener](#listener), [Logic controller](#logic-controller), [Parameterization](#parameterization), [Post-processor](#post-processor), [Pre-processor](#pre-processor), [Recording](#recording), [Results file (JTL)](#results-file), [Sampler](#sampler), [Setup and Teardown](#setup-teardown), [Shutdown test](#shutdown), [Stop test](#stop-test), [Summary Report](#summary-report), [System properties](#system-properties), [Test plan (JMeter)](#test-plan), [Thread Group](#thread-group), [Timer](#timer), [Transaction Controller](#transaction-controller), [User properties](#user-properties) |
| 🌐 **Web and protocol** | [Bandwidth](#bandwidth), [Cookie](#cookie), [Dynamic data](#dynamic-data), [Embedded resources](#embedded-resources), [HTTP status code](#http-status-code), [Keep-alive](#keep-alive), [MIME type](#mime-type), [Page load time](#page-load-time), [Payload](#payload), [Proxy](#proxy), [Round-trip time (RTT)](#round-trip-time), [Session](#session), [Session ID](#session-id), [Timeout](#timeout) |
| 🔄 **Process and practice** | [APM (Application Performance Monitoring)](#apm), [Continuous performance testing](#continuous-performance-testing), [Investigation](#investigation), [Monitoring](#monitoring), [Performance tuning](#tuning), [Profiling](#profiling), [Real-time results](#real-time-monitoring), [Shift-left performance testing](#shift-left), [Test data](#test-data) |

---

<a id="letter-a"></a>

## A

<a id="acceptance-criteria"></a>

### Acceptance criteria

**Category:** 🎯 Requirements and goals

See **Performance acceptance criteria**.

🔗 **See also:** [Performance acceptance criteria](#performance-acceptance-criteria)

<a id="active-threads"></a>

### Active threads

**Also called:** Active users, Running threads &nbsp;|&nbsp; **Category:** 🛠️ JMeter concepts

The number of JMeter threads (virtual users) running at a given moment. It rises during ramp-up, stays flat in steady state and falls during ramp-down.

🛠️ **In JMeter:** Recorded per sample in the `grpThreads` (this Thread Group) and `allThreads` (whole test) columns. Shown in the HTML dashboard as **Active Threads Over Time**.

🔗 **See also:** [Virtual user (VU)](#virtual-user) · [Concurrent users](#concurrent-users) · [Ramp-up](#ramp-up)

<a id="aggregate-report"></a>

### Aggregate Report

**Category:** 🛠️ JMeter concepts

A JMeter listener that shows one row of statistics per sampler label: samples, average, median, 90% / 95% / 99% lines, min, max, error %, throughput and KB/sec.

🛠️ **In JMeter:** Add via **Add > Listener > Aggregate Report**. In real load tests, generate the same table from the results file instead of keeping the listener in the plan (see [TOD#007](TOD.md#tod007)).

🔗 **See also:** [Summary Report](#summary-report) · [Percentile](#percentile) · [HTML dashboard report](#html-dashboard)

<a id="apdex"></a>

### Apdex

**Also called:** Application Performance Index &nbsp;|&nbsp; **Category:** ⏱️ Metrics and timing

Application Performance Index. A score from 0 to 1 that turns response times into user satisfaction. Each sample is **Satisfied** (at or under threshold T), **Tolerating** (between T and 4T) or **Frustrated** (over 4T). Apdex = (Satisfied + Tolerating / 2) / Total.

🛠️ **In JMeter:** The HTML dashboard shows an APDEX table. Thresholds are set with `jmeter.reportgenerator.apdex_satisfied_threshold` (default 500 ms) and `jmeter.reportgenerator.apdex_tolerated_threshold` (default 1500 ms).

💬 **Example:** T = 500 ms. Of 100 requests, 80 are under 500 ms, 15 are between 500 ms and 1500 ms, 5 are slower. Apdex = (80 + 7.5) / 100 = 0.875.

🔗 **See also:** [Response time](#response-time) · [Percentile](#percentile)

<a id="apm"></a>

### APM (Application Performance Monitoring)

**Also called:** Application Performance Monitoring, Application Performance Management &nbsp;|&nbsp; **Category:** 🔄 Process and practice

Tools that trace requests inside the application (method timings, database calls, external calls) while it runs. Examples: Dynatrace, New Relic, AppDynamics, Elastic APM, Datadog, open-source OpenTelemetry-based stacks.

🛠️ **In JMeter:** JMeter tells you **that** a request is slow. APM tells you **why**. Run them together.

🔗 **See also:** [Monitoring](#monitoring) · [Profiling](#profiling) · [Bottleneck](#bottleneck)

<a id="application-metrics"></a>

### Application-specific metrics

**Category:** ⏱️ Metrics and timing

Metrics that describe the health of the application itself, such as active sessions, queue lengths, cache hit ratio, GC pauses, thread pool usage and errors logged per minute.

🔗 **See also:** [Metrics](#metrics) · [Platform-specific metrics](#platform-metrics) · [Network-specific metrics](#network-metrics) · [Service-level metrics](#service-level-metrics) · [Business metrics](#business-metrics)

<a id="arrival-rate"></a>

### Arrival rate

**Category:** 🏋️ Load modelling

The rate at which new users or requests arrive at the system, for example 50 new sessions per minute. Used to describe an **open** workload model.

🛠️ **In JMeter:** Model it with the **Open Model Thread Group** (`rate(50/min)`), or approximate it with the **Precise Throughput Timer** or **Constant Throughput Timer**.

🔗 **See also:** [Open workload model](#open-model) · [Closed workload model](#closed-model) · [Throughput](#throughput) · [Pacing](#pacing)

<a id="assertion"></a>

### Assertion

**Category:** 🛠️ JMeter concepts

A check that a response is correct, for example the status code is 200, the body contains an expected value, or the response was fast enough. A failed assertion marks the sample as an error.

🛠️ **In JMeter:** Response Assertion, JSON Assertion, Duration Assertion, Size Assertion, XPath2 Assertion and others. Assertions run after post-processors on the sampler they apply to.

> ⚠️ **Watch out:** A response can be **HTTP 200 and still wrong** (an error page, an empty list). Without assertions, JMeter counts it as a success and your error rate looks better than it is.

🔗 **See also:** [Error rate](#error-rate) · [Sampler](#sampler) · [Execution order (JMeter)](#execution-order)

<a id="average"></a>

### Average

**Also called:** Mean, Arithmetic mean, Avg &nbsp;|&nbsp; **Category:** 📊 Statistics

The arithmetic mean: the sum of all values divided by the number of values. For response times, total time of all samples divided by the sample count.

🛠️ **In JMeter:** **Average** column in the Aggregate Report, Summary Report and the HTML dashboard **Statistics** table.

💬 **Example:** Response times 100, 120, 110, 130 and 2,000 ms. Average = 492 ms, yet four of the five users waited about 115 ms. One slow outlier moved the average by more than 4×.

> ⚠️ **Watch out:** Never use the average alone for pass/fail. It hides slow outliers and is pulled around by them. Report it with the **median** and **percentiles**.

🔗 **See also:** [Median](#median) · [Percentile](#percentile) · [Standard deviation](#standard-deviation) · [Outlier](#outlier)

[⬆️ Back to letters](#letters)

---

<a id="letter-b"></a>

## B

<a id="backend-listener"></a>

### Backend Listener

**Category:** 🛠️ JMeter concepts

A JMeter listener that streams results to a time-series database (InfluxDB or Graphite) while the test runs, usually to view them live in Grafana.

🛠️ **In JMeter:** **Add > Listener > Backend Listener**. Choose `InfluxdbBackendListenerClient` or `GraphiteBackendListenerClient`.

🔗 **See also:** [Listener](#listener) · [Monitoring](#monitoring) · [Real-time results](#real-time-monitoring)

<a id="bandwidth"></a>

### Bandwidth

**Category:** 🌐 Web and protocol

The maximum amount of data a network link can carry per second, for example 100 Mbit/s. Throughput in bytes can never exceed it.

🛠️ **In JMeter:** To simulate slower users, set `httpclient.socket.http.cps` / `httpclient.socket.https.cps` (characters per second) in `user.properties`. Watch **Received KB/sec** and **Sent KB/sec** so the load generator's own network is not the bottleneck.

🔗 **See also:** [Latency](#latency) · [Payload](#payload) · [Network-specific metrics](#network-metrics)

<a id="baseline-testing"></a>

### Baseline testing

**Also called:** Baseline &nbsp;|&nbsp; **Category:** 🧪 Test types

A test that measures performance in a known, controlled state to create a **reference point** for every later test. Usually low, steady load on a stable build. See [PTT#01](Performance-Testing-Types.md#ptt01).

🔗 **See also:** [Benchmark testing](#benchmark-testing) · [Performance regression testing](#regression-testing)

<a id="benchmark-testing"></a>

### Benchmark testing

**Also called:** Benchmark &nbsp;|&nbsp; **Category:** 🧪 Test types

A test that compares performance with **something else**: an industry standard, a competitor, another configuration or the previous release. See [PTT#09](Performance-Testing-Types.md#ptt09).

🔗 **See also:** [Baseline testing](#baseline-testing)

<a id="bottleneck"></a>

### Bottleneck

**Category:** 🖥️ System behaviour and resources

The single component that limits the performance of the whole system, for example a saturated CPU, a small database connection pool, a slow query, a lock or a slow third-party call. Fixing anything else gives little gain.

💬 **Example:** Response times climb from 150 users while the app server CPU sits at 30%, but all 20 database connections are in use. The connection pool is the bottleneck.

🔗 **See also:** [Saturation](#saturation) · [Resource utilization](#resource-utilization) · [Connection pool](#connection-pool) · [Performance tuning](#tuning)

<a id="breakpoint"></a>

### Breakpoint testing

**Also called:** Break point, Breaking point &nbsp;|&nbsp; **Category:** 🧪 Test types

A stress test that raises load continuously until the system fails, to find the exact limit. See [PTT#10](Performance-Testing-Types.md#ptt10).

🔗 **See also:** [Stress testing](#stress-testing) · [Capacity testing](#capacity-testing) · [Saturation](#saturation)

<a id="business-metrics"></a>

### Business metrics

**Category:** ⏱️ Metrics and timing

Metrics that the business cares about, measured during the test: orders completed per hour, payments per minute, abandoned carts, revenue at risk. They translate technical results into business language.

🔗 **See also:** [Metrics](#metrics) · [Service-level metrics](#service-level-metrics) · [Business transaction](#business-transaction)

<a id="business-transaction"></a>

### Business transaction

**Also called:** User journey step, Transaction &nbsp;|&nbsp; **Category:** 🏋️ Load modelling

A complete user goal made of one or more requests, such as **Login**, **Search product** or **Checkout**. Targets are usually written per business transaction, not per HTTP request.

🛠️ **In JMeter:** Group the requests with a **Transaction Controller** so the report shows one timing for the whole step.

🔗 **See also:** [Transaction Controller](#transaction-controller) · [Scenario](#scenario) · [Workload model](#workload-model)

[⬆️ Back to letters](#letters)

---

<a id="letter-c"></a>

## C

<a id="cache"></a>

### Cache

**Category:** 🖥️ System behaviour and resources

A fast store that keeps recently used data so it does not have to be fetched or computed again. Exists in browsers, CDNs, application servers and databases. A **warm** cache makes responses much faster than a **cold** one.

🛠️ **In JMeter:** **HTTP Cache Manager** simulates the browser cache. Enable "Clear cache each iteration" if every iteration should behave like a new visitor.

> ⚠️ **Watch out:** If every virtual user requests the same product ID, the cache answers everything and the test is unrealistically fast. Vary the test data.

🔗 **See also:** [Warm-up](#warm-up) · [Test data](#test-data) · [Parameterization](#parameterization)

<a id="capacity"></a>

### Capacity

**Category:** 🖥️ System behaviour and resources

The maximum workload a system can handle **while still meeting its performance targets**. Usually given as users, transactions per second or data volume.

💬 **Example:** "Current production capacity is 1,200 concurrent users or 85 checkouts per second, at p95 below 2 seconds."

🔗 **See also:** [Capacity testing](#capacity-testing) · [Scalability](#scalability) · [Headroom](#headroom)

<a id="capacity-testing"></a>

### Capacity testing

**Also called:** Capacity planning test &nbsp;|&nbsp; **Category:** 🧪 Test types

A test that increases load step by step to find the **capacity**: the highest load at which targets are still met. Stops when targets are missed. See [PTT#07](Performance-Testing-Types.md#ptt07).

🔗 **See also:** [Capacity](#capacity) · [Stress testing](#stress-testing) · [Scalability testing](#scalability-testing)

<a id="closed-model"></a>

### Closed workload model

**Also called:** Closed model, Closed system &nbsp;|&nbsp; **Category:** 🏋️ Load modelling

A model with a **fixed number of users** who each loop: send a request, wait for the response, think, repeat. If the system slows down, users send fewer requests, so the load drops automatically.

🛠️ **In JMeter:** The classic **Thread Group** is a closed model: N threads, each looping.

> ⚠️ **Watch out:** A closed model can hide problems. Real visitors don't stop arriving because the site is slow. For public websites, consider an open model too.

🔗 **See also:** [Open workload model](#open-model) · [Arrival rate](#arrival-rate) · [Coordinated omission](#coordinated-omission)

<a id="component-testing"></a>

### Component testing

**Also called:** Component performance test, Isolation test &nbsp;|&nbsp; **Category:** 🧪 Test types

Performance testing of a single component (an API, a service, a database query) in isolation, before the full system is ready. Finds problems early and cheaply.

🔗 **See also:** [Unit test (performance)](#unit-test) · [Shift-left performance testing](#shift-left) · [Smoke testing](#smoke-testing)

<a id="concurrency-testing"></a>

### Concurrency testing

**Category:** 🧪 Test types

A test where many users hit the **same function or record at the same moment**, to find locking, deadlock and double-booking problems. See [PTT#10](Performance-Testing-Types.md#ptt10).

🛠️ **In JMeter:** Use a **Synchronizing Timer** to release a group of threads at once.

🔗 **See also:** [Simultaneous users](#simultaneous-users) · [Deadlock](#deadlock) · [Contention](#contention)

<a id="concurrent-users"></a>

### Concurrent users

**Also called:** Concurrency, Active users &nbsp;|&nbsp; **Category:** 🏋️ Load modelling

Users who are active in the system **during the same period** (logged in, mid-journey), but are not necessarily sending a request at the same instant. Most are reading or thinking at any given moment.

🛠️ **In JMeter:** Usually modelled as the number of threads in a Thread Group, with think time between requests.

💬 **Example:** 1,000 concurrent users who each think for 10 seconds between 0.5 second requests produce only about 95 requests per second.

> ⚠️ **Watch out:** "1,000 users" means very different load depending on think time. Always ask: concurrent, simultaneous, or per hour?

🔗 **See also:** [Simultaneous users](#simultaneous-users) · [Virtual user (VU)](#virtual-user) · [Little's Law](#littles-law) · [Think time](#think-time)

<a id="configuration-element"></a>

### Configuration element

**Also called:** Config element &nbsp;|&nbsp; **Category:** 🛠️ JMeter concepts

A JMeter element that sets up defaults or shared settings used by samplers: HTTP Request Defaults, HTTP Header Manager, HTTP Cookie Manager, CSV Data Set Config, User Defined Variables and others.

🔗 **See also:** [Sampler](#sampler) · [Execution order (JMeter)](#execution-order) · [Parameterization](#parameterization)

<a id="connect-time"></a>

### Connect time

**Category:** ⏱️ Metrics and timing

The time taken to open a network connection to the server, including the TCP handshake and, for HTTPS, the TLS/SSL handshake. Zero when an existing connection is reused.

🛠️ **In JMeter:** The `Connect` column in the results file. It is **included in** latency, which is included in elapsed time.

🔗 **See also:** [Latency](#latency) · [Elapsed time](#elapsed-time) · [Keep-alive](#keep-alive) · [Timings explained: connect, latency, elapsed](#timings-explained)

<a id="connection-pool"></a>

### Connection pool

**Category:** 🖥️ System behaviour and resources

A set of ready-made connections (usually to a database) that the application reuses instead of opening a new one per request. When all connections are busy, requests wait in a queue.

🔗 **See also:** [Thread pool](#thread-pool) · [Bottleneck](#bottleneck) · [Saturation](#saturation) · [Queueing](#queueing)

<a id="constant-throughput-timer"></a>

### Constant Throughput Timer

**Category:** 🛠️ JMeter concepts

A JMeter timer that adds pauses so the samplers run at a target rate, given in **samples per minute**.

🛠️ **In JMeter:** **Add > Timer > Constant Throughput Timer**. It can only slow threads down. If you don't have enough threads, the target rate is not reached. For more even pacing use the **Precise Throughput Timer**.

🔗 **See also:** [Pacing](#pacing) · [Throughput](#throughput) · [Timer](#timer) · [Arrival rate](#arrival-rate)

<a id="contention"></a>

### Contention

**Also called:** Lock contention, Resource contention &nbsp;|&nbsp; **Category:** 🖥️ System behaviour and resources

Competition between requests for the same limited resource: a database row lock, a synchronised block of code, a file, a connection. More users means more waiting.

🔗 **See also:** [Deadlock](#deadlock) · [Bottleneck](#bottleneck) · [Queueing](#queueing)

<a id="continuous-performance-testing"></a>

### Continuous performance testing

**Also called:** Performance testing in CI/CD &nbsp;|&nbsp; **Category:** 🔄 Process and practice

Running automated performance tests in the CI/CD pipeline on every build or every night, comparing with a baseline and failing the build on regressions.

🛠️ **In JMeter:** Run JMeter in CLI mode from the pipeline, for example with GitHub Actions, Jenkins or Taurus.

🔗 **See also:** [Shift-left performance testing](#shift-left) · [Performance regression testing](#regression-testing) · [Performance threshold](#performance-threshold)

<a id="controller"></a>

### Controller (distributed testing)

**Also called:** Master (older term), Client &nbsp;|&nbsp; **Category:** 🏗️ Environments and infrastructure

In distributed testing, the JMeter instance that starts the test on the workers and collects their results. Older documents call it the **master**.

> ⚠️ **Watch out:** Don't confuse it with JMeter **logic controllers** inside a test plan.

🔗 **See also:** [Distributed testing](#distributed-testing) · [Worker](#worker) · [Logic controller](#logic-controller)

<a id="cookie"></a>

### Cookie

**Category:** 🌐 Web and protocol

A small piece of data the server asks the browser to store and send back with every later request. Often holds the session ID.

🛠️ **In JMeter:** Add one **HTTP Cookie Manager** per Thread Group.

🔗 **See also:** [Session](#session) · [Session ID](#session-id)

<a id="coordinated-omission"></a>

### Coordinated omission

**Category:** 📊 Statistics

A measurement error where the load tool waits for a slow response before sending the next request, so it sends fewer requests exactly when the system is slow. The slow period is under-sampled and percentiles look better than reality.

🛠️ **In JMeter:** Classic Thread Groups (closed model) are exposed to it. The **Open Model Thread Group** and arrival-based thread groups reduce it.

🔗 **See also:** [Closed workload model](#closed-model) · [Open workload model](#open-model) · [Percentile](#percentile)

<a id="correlation"></a>

### Correlation

**Also called:** Dynamic value handling &nbsp;|&nbsp; **Category:** 🛠️ JMeter concepts

Capturing a dynamic value from one response (session ID, CSRF token, order ID) and sending it in a later request. Without it, recorded scripts replay stale values and fail.

🛠️ **In JMeter:** Use post-processors: **Regular Expression Extractor**, **JSON Extractor**, **Boundary Extractor**, **CSS Selector Extractor** or **XPath2 Extractor**. Reference the result as `${variableName}`.

🔗 **See also:** [Dynamic data](#dynamic-data) · [Post-processor](#post-processor) · [Session ID](#session-id) · [Parameterization](#parameterization)

<a id="cpu-utilization"></a>

### CPU utilization

**Category:** 🖥️ System behaviour and resources

The percentage of time the processor is busy. Sustained values above about 80% usually mean response times will soon rise sharply.

🛠️ **In JMeter:** Monitor it on the servers **and** on the JMeter machines. A load generator above about 80% CPU produces unreliable results.

🔗 **See also:** [Resource utilization](#resource-utilization) · [Saturation](#saturation) · [Platform-specific metrics](#platform-metrics)

<a id="csv-data-set"></a>

### CSV Data Set Config

**Category:** 🛠️ JMeter concepts

A JMeter configuration element that reads test data (usernames, search terms, IDs) line by line from a CSV file into variables.

🛠️ **In JMeter:** Set **Sharing mode** to control whether threads share one file pointer. See [TOD#009](TOD.md#tod009).

🔗 **See also:** [Parameterization](#parameterization) · [Test data](#test-data) · [Configuration element](#configuration-element)

[⬆️ Back to letters](#letters)

---

<a id="letter-d"></a>

## D

<a id="deadlock"></a>

### Deadlock

**Category:** 🖥️ System behaviour and resources

Two or more processes each wait for a resource the other holds, so none can continue. Under load this shows up as requests that hang until they time out.

🔗 **See also:** [Contention](#contention) · [Concurrency testing](#concurrency-testing) · [Timeout](#timeout)

<a id="distributed-testing"></a>

### Distributed testing

**Also called:** Remote testing &nbsp;|&nbsp; **Category:** 🏗️ Environments and infrastructure

Running one test from **several load generator machines** at the same time, controlled by one controller, to create more load than a single machine can.

🛠️ **In JMeter:** Start `jmeter-server` on each worker, then run `jmeter -n -t plan.jmx -R host1,host2` (or `-r` to use `remote_hosts`) from the controller. Each worker runs the **full** plan, so 100 threads on 3 workers = 300 users.

🔗 **See also:** [Load generator](#load-generator) · [Controller (distributed testing)](#controller) · [Worker](#worker)

<a id="duration"></a>

### Duration

**Also called:** Test duration, Hold time &nbsp;|&nbsp; **Category:** 🏋️ Load modelling

How long a test (or one phase of it) runs. Choose it to answer the question: a smoke test needs minutes, a load test about an hour of steady state, a soak test many hours.

🛠️ **In JMeter:** Thread Group > **Specify Thread lifetime** > Duration (seconds). Combine with Loop Count = **Infinite**.

🔗 **See also:** [Steady state](#steady-state) · [Ramp-up](#ramp-up) · [Endurance testing](#endurance-testing)

<a id="dynamic-data"></a>

### Dynamic data

**Category:** 🌐 Web and protocol

Values that change on each run or each session (session IDs, tokens, timestamps, generated IDs). They must be captured or generated, never hard-coded from a recording.

🔗 **See also:** [Correlation](#correlation) · [Session ID](#session-id) · [Parameterization](#parameterization)

[⬆️ Back to letters](#letters)

---

<a id="letter-e"></a>

## E

<a id="elapsed-time"></a>

### Elapsed time

**Also called:** Response time (in JMeter), Sample time, Load time &nbsp;|&nbsp; **Category:** ⏱️ Metrics and timing

In JMeter, the time from **just before the request is sent** to **just after the last byte of the response is received**. It is what JMeter reports as response time. It does not include browser rendering or client-side JavaScript.

🛠️ **In JMeter:** The `elapsed` column in the results file. Shown as Average / Min / Max / percentiles in every report. A **Duration Assertion** can fail samples whose elapsed time is too long.

💬 **Example:** Connect 20 ms, first byte at 180 ms, last byte at 260 ms. Elapsed time = 260 ms, latency = 180 ms, connect time = 20 ms.

🔗 **See also:** [Latency](#latency) · [Connect time](#connect-time) · [Response time](#response-time) · [Timings explained: connect, latency, elapsed](#timings-explained)

<a id="elasticity"></a>

### Elasticity

**Also called:** Auto-scaling &nbsp;|&nbsp; **Category:** 🖥️ System behaviour and resources

The ability to **automatically** add and remove resources as load changes, for example cloud auto-scaling. Test it with spikes and watch how fast new instances help.

🔗 **See also:** [Scalability](#scalability) · [Spike testing](#spike-testing)

<a id="embedded-resources"></a>

### Embedded resources

**Also called:** Static resources, Page resources &nbsp;|&nbsp; **Category:** 🌐 Web and protocol

Images, CSS, JavaScript and fonts that a browser downloads after the main HTML page. They make up most page weight.

🛠️ **In JMeter:** HTTP Request > **Advanced** > **Retrieve All Embedded Resources** (with parallel downloads). Usually only needed if the same server or CDN is under test.

🔗 **See also:** [Hits per second](#hits-per-second) · [Page load time](#page-load-time) · [Cache](#cache)

<a id="endurance-testing"></a>

### Endurance testing

**Also called:** Soak testing, Longevity testing &nbsp;|&nbsp; **Category:** 🧪 Test types

A test that holds a normal, realistic load for a **long time** (many hours or days) to find problems that grow slowly: memory leaks, connection leaks, full disks, log growth. See [PTT#05](Performance-Testing-Types.md#ptt05).

🔗 **See also:** [Memory leak](#memory-leak) · [Load testing](#load-testing)

<a id="error-rate"></a>

### Error rate

**Also called:** Error %, Failure rate &nbsp;|&nbsp; **Category:** ⏱️ Metrics and timing

The percentage of requests that failed: (failed samples / total samples) × 100. A sample fails on a connection error, timeout, HTTP 4xx/5xx status, or a failed assertion.

🛠️ **In JMeter:** **Error %** column in the Aggregate and Summary Reports. The HTML dashboard lists failures in **Errors** and **Top 5 Errors by sampler**.

💬 **Example:** 10,000 samples, 37 failed. Error rate = 0.37%.

> ⚠️ **Watch out:** A fast test with a high error rate is not a good result. Error pages are often faster than real pages. Always read error rate **next to** response times.

🔗 **See also:** [Assertion](#assertion) · [HTTP status code](#http-status-code) · [Timeout](#timeout)

<a id="execution-order"></a>

### Execution order (JMeter)

**Also called:** Order of execution &nbsp;|&nbsp; **Category:** 🛠️ JMeter concepts

The order in which JMeter runs the elements that apply to a sampler: 1. Configuration elements, 2. Pre-processors, 3. Timers, 4. **Sampler**, 5. Post-processors, 6. Assertions, 7. Listeners.

🛠️ **In JMeter:** Elements are scoped by where they sit in the tree. A timer under the Thread Group applies to **every** sampler in it.

🔗 **See also:** [Sampler](#sampler) · [Timer](#timer) · [Pre-processor](#pre-processor) · [Post-processor](#post-processor) · [Assertion](#assertion) · [Listener](#listener)

[⬆️ Back to letters](#letters)

---

<a id="letter-f"></a>

## F

<a id="flow-control-action"></a>

### Flow Control Action

**Also called:** Test Action (older name) &nbsp;|&nbsp; **Category:** 🛠️ JMeter concepts

A JMeter sampler that does not send a request. It can pause a thread, or stop or restart the thread or the test. Commonly used to add think time or pacing in one place.

🛠️ **In JMeter:** **Add > Sampler > Flow Control Action**. Put timers as its children for think time that is not attached to a real request.

🔗 **See also:** [Think time](#think-time) · [Pacing](#pacing) · [Timer](#timer)

[⬆️ Back to letters](#letters)

---

<a id="letter-g"></a>

## G

<a id="garbage-collection"></a>

### Garbage collection (GC)

**Also called:** GC, GC pause &nbsp;|&nbsp; **Category:** 🖥️ System behaviour and resources

The automatic process in Java, .NET and similar platforms that frees memory no longer in use. Long or frequent GC pauses stop the application and cause response time spikes.

🛠️ **In JMeter:** Watch GC on the system under test **and** on JMeter itself. JMeter's heap is set with the `HEAP` variable in `bin/jmeter` (or `setenv.sh`).

🔗 **See also:** [Memory leak](#memory-leak) · [Resource utilization](#resource-utilization) · [Application-specific metrics](#application-metrics)

[⬆️ Back to letters](#letters)

---

<a id="letter-h"></a>

## H

<a id="headroom"></a>

### Headroom

**Category:** 🖥️ System behaviour and resources

The spare capacity between today's peak load and the capacity limit. Gives safety for growth and unexpected spikes.

💬 **Example:** Peak is 600 users, capacity is 1,000 users. Headroom is 400 users (40%).

🔗 **See also:** [Capacity](#capacity) · [Peak load](#peak-load) · [Scalability](#scalability)

<a id="hits-per-second"></a>

### Hits per second

**Also called:** HPS, Hits/s &nbsp;|&nbsp; **Category:** ⏱️ Metrics and timing

The number of HTTP requests the server receives per second, including embedded resources such as images, CSS and JavaScript. Usually higher than transactions per second.

🛠️ **In JMeter:** HTML dashboard > Charts > Throughput > **Hits Per Second**.

🔗 **See also:** [Throughput](#throughput) · [Transactions per second (TPS)](#transactions-per-second) · [Embedded resources](#embedded-resources)

<a id="html-dashboard"></a>

### HTML dashboard report

**Also called:** Dashboard report, HTML report &nbsp;|&nbsp; **Category:** 🛠️ JMeter concepts

JMeter's built-in report: Apdex, statistics table, errors and over-time charts generated from a results file.

🛠️ **In JMeter:** After a run: `jmeter -g results.jtl -o report/`. Or during a CLI run: `jmeter -n -t plan.jmx -l results.jtl -e -o report/`. The output folder must be empty or not exist.

🔗 **See also:** [Aggregate Report](#aggregate-report) · [Results file (JTL)](#results-file) · [Apdex](#apdex)

<a id="http-status-code"></a>

### HTTP status code

**Also called:** Response code, Status code &nbsp;|&nbsp; **Category:** 🌐 Web and protocol

The three-digit result code in every HTTP response. 2xx success, 3xx redirect, 4xx client error (400, 401, 403, 404, 429), 5xx server error (500, 502, 503, 504).

🛠️ **In JMeter:** The `responseCode` column. JMeter marks 4xx and 5xx as failures by default. Codes like `Non HTTP response code: java.net.SocketTimeoutException` mean no HTTP response came back at all.

🔗 **See also:** [Error rate](#error-rate) · [Assertion](#assertion) · [Timeout](#timeout)

[⬆️ Back to letters](#letters)

---

<a id="letter-i"></a>

## I

<a id="idle-time"></a>

### Idle time

**Category:** ⏱️ Metrics and timing

Time inside a sample when JMeter was not waiting for the server, for example while a Transaction Controller's child was paused. Usually close to zero.

🛠️ **In JMeter:** The `IdleTime` column in the results file.

🔗 **See also:** [Elapsed time](#elapsed-time) · [Transaction Controller](#transaction-controller)

<a id="investigation"></a>

### Investigation

**Also called:** Diagnostic testing, Root cause analysis &nbsp;|&nbsp; **Category:** 🔄 Process and practice

Performance testing activity aimed at **finding the cause** of a known or suspected problem, rather than proving targets are met. Often repeats one transaction while changing one thing at a time.

🔗 **See also:** [Bottleneck](#bottleneck) · [Profiling](#profiling) · [Component testing](#component-testing) · [Performance tuning](#tuning)

<a id="iteration"></a>

### Iteration

**Category:** 🏋️ Load modelling

One full pass of a thread through the samplers in its Thread Group. A virtual user usually runs many iterations during a test.

🛠️ **In JMeter:** Controlled by **Loop Count** in the Thread Group. The function `${__jm__Thread Group__idx}` gives the current iteration number.

🔗 **See also:** [Virtual user (VU)](#virtual-user) · [Pacing](#pacing) · [Duration](#duration)

[⬆️ Back to letters](#letters)

---

<a id="letter-j"></a>

## J

<a id="jmeter-properties"></a>

### JMeter properties

**Also called:** Properties &nbsp;|&nbsp; **Category:** 🛠️ JMeter concepts

Settings that are **global**: shared by all threads in a JMeter instance. Used for JMeter's own configuration and for values you want to pass in from the command line.

🛠️ **In JMeter:** Defined in `jmeter.properties` (don't edit) or `user.properties` (do edit, see [TOD#003](TOD.md#tod003)). Set from the CLI with `-Jname=value` (or `-G` for remote workers). Read with `${__P(name,default)}`.

💬 **Example:** `jmeter -n -t plan.jmx -Jthreads=200 -Jrampup=300` with the Thread Group set to `${__P(threads,10)}` users.

🔗 **See also:** [JMeter variables](#jmeter-variables) · [System properties](#system-properties) · [User properties](#user-properties)

<a id="jmeter-variables"></a>

### JMeter variables

**Also called:** Variables, vars &nbsp;|&nbsp; **Category:** 🛠️ JMeter concepts

Named values that are **local to each thread** (virtual user). One user's token never leaks into another's.

🛠️ **In JMeter:** Created by User Defined Variables, CSV Data Set Config, extractors and scripts. Referenced as `${name}`. In JSR223 scripts: `vars.get("name")` / `vars.put("name", value)`.

🔗 **See also:** [JMeter properties](#jmeter-properties) · [Correlation](#correlation) · [Parameterization](#parameterization)

[⬆️ Back to letters](#letters)

---

<a id="letter-k"></a>

## K

<a id="keep-alive"></a>

### Keep-alive

**Also called:** Persistent connection, Connection reuse &nbsp;|&nbsp; **Category:** 🌐 Web and protocol

Reusing one TCP connection for several HTTP requests instead of opening a new one each time. Saves connection time and server resources. Browsers do this by default.

🛠️ **In JMeter:** **Use KeepAlive** checkbox in the HTTP Request sampler (on by default). With keep-alive, connect time is zero on reused connections.

🔗 **See also:** [Connect time](#connect-time) · [Latency](#latency)

<a id="knee"></a>

### Knee point

**Also called:** Knee, Inflection point &nbsp;|&nbsp; **Category:** 🖥️ System behaviour and resources

The point on a load vs response time graph where response time stops rising slowly and starts rising steeply. It shows the practical capacity of the system.

🔗 **See also:** [Saturation](#saturation) · [Capacity](#capacity) · [Bottleneck](#bottleneck)

<a id="kpi"></a>

### KPI (Key Performance Indicator)

**Also called:** Key Performance Indicator &nbsp;|&nbsp; **Category:** 🎯 Requirements and goals

A small set of metrics chosen to judge whether a system or test is successful, for example p95 checkout time, error rate and orders per hour.

🔗 **See also:** [Metrics](#metrics) · [SLA (Service Level Agreement)](#sla) · [Acceptance criteria](#acceptance-criteria)

[⬆️ Back to letters](#letters)

---

<a id="letter-l"></a>

## L

<a id="latency"></a>

### Latency

**Also called:** Time to first byte (TTFB), Response latency &nbsp;|&nbsp; **Category:** ⏱️ Metrics and timing

In JMeter, the time from **just before the request is sent** to **just after the first part of the response is received** (time to first byte). It includes connect time and server processing time, but not the time to download the rest of the response.

🛠️ **In JMeter:** The `Latency` column in the results file. Shown in the HTML dashboard as **Latencies Over Time**. Latency is always ≤ elapsed time.

💬 **Example:** Elapsed 900 ms, latency 850 ms: the server was slow. Elapsed 900 ms, latency 100 ms: the server answered quickly but the response was large or the network slow.

> ⚠️ **Watch out:** Network engineers use "latency" to mean **network delay** (round-trip time) only. JMeter's latency includes server processing. Say which one you mean.

🔗 **See also:** [Elapsed time](#elapsed-time) · [Connect time](#connect-time) · [Round-trip time (RTT)](#round-trip-time) · [Timings explained: connect, latency, elapsed](#timings-explained)

<a id="listener"></a>

### Listener

**Category:** 🛠️ JMeter concepts

A JMeter element that collects sample results to display or save them: View Results Tree, Aggregate Report, Summary Report, Simple Data Writer, Backend Listener.

🛠️ **In JMeter:** Most listeners use memory and CPU. In real load runs, use CLI mode with `-l results.jtl` and generate reports afterwards (see [TOD#006](TOD.md#tod006) and [TOD#007](TOD.md#tod007)).

🔗 **See also:** [Aggregate Report](#aggregate-report) · [Results file (JTL)](#results-file) · [Backend Listener](#backend-listener)

<a id="littles-law"></a>

### Little's Law

**Category:** 🏋️ Load modelling

A formula that links users, throughput and time: **N = X × (R + Z)**. N = concurrent users, X = throughput (requests per second), R = response time, Z = think time (both in seconds). Use it to size a test or sanity-check results.

💬 **Example:** Target 100 requests per second, response time 0.5 s, think time 4.5 s. Users needed N = 100 × (0.5 + 4.5) = 500 users.

🔗 **See also:** [Concurrent users](#concurrent-users) · [Throughput](#throughput) · [Think time](#think-time) · [Workload model](#workload-model)

<a id="load-generator"></a>

### Load generator

**Also called:** Load injector, Agent, Injector &nbsp;|&nbsp; **Category:** 🏗️ Environments and infrastructure

A machine that runs the load testing tool and sends requests to the system under test.

🛠️ **In JMeter:** Keep load generators close to the system (same network region) and monitor their CPU, memory and network. If they are overloaded, the results describe JMeter, not your system.

🔗 **See also:** [Distributed testing](#distributed-testing) · [Worker](#worker) · [Controller (distributed testing)](#controller)

<a id="load-profile"></a>

### Load profile

**Also called:** Load shape, Load pattern &nbsp;|&nbsp; **Category:** 🏋️ Load modelling

The shape of the load over time: how many users or requests, ramp-up, steady state, steps, spikes and ramp-down. Often drawn as a graph of users against time.

🛠️ **In JMeter:** Simple shapes: Thread Group. Steps and complex shapes: Open Model Thread Group, or plugins such as Ultimate, Concurrency and Arrivals Thread Groups.

🔗 **See also:** [Workload model](#workload-model) · [Ramp-up](#ramp-up) · [Steady state](#steady-state) · [Ramp-down](#ramp-down)

<a id="load-testing"></a>

### Load testing

**Category:** 🧪 Test types

A test at the **expected** load (normal and peak) to check that performance targets are met. See [PTT#02](Performance-Testing-Types.md#ptt02).

🔗 **See also:** [Stress testing](#stress-testing) · [Baseline testing](#baseline-testing) · [Peak load](#peak-load)

<a id="logic-controller"></a>

### Logic controller

**Also called:** Controller &nbsp;|&nbsp; **Category:** 🛠️ JMeter concepts

A JMeter element that decides the order and conditions in which samplers run: Loop, If, While, Once Only, Throughput, Random, Transaction, Module and others.

🔗 **See also:** [Transaction Controller](#transaction-controller) · [Sampler](#sampler) · [Thread Group](#thread-group)

<a id="long-tail"></a>

### Long tail

**Also called:** Tail latency &nbsp;|&nbsp; **Category:** 📊 Statistics

The small share of requests that are much slower than the rest. On a response time histogram it looks like a long tail to the right. The p99 and p99.9 describe it.

🔗 **See also:** [Percentile](#percentile) · [Outlier](#outlier) · [Normal distribution](#normal-distribution)

[⬆️ Back to letters](#letters)

---

<a id="letter-m"></a>

## M

<a id="max"></a>

### Maximum time

**Also called:** Max, Maximum response time &nbsp;|&nbsp; **Category:** 📊 Statistics

The slowest single sample in the result set.

🛠️ **In JMeter:** **Max** column in the Aggregate and Summary Reports.

> ⚠️ **Watch out:** One slow request (a cold start, a GC pause) can set the maximum. Read it as a pointer to investigate, not as a typical value.

🔗 **See also:** [Minimum time](#min) · [Percentile](#percentile) · [Outlier](#outlier)

<a id="median"></a>

### Median

**Also called:** 50th percentile, p50 &nbsp;|&nbsp; **Category:** 📊 Statistics

The middle value when all samples are sorted: half were faster, half were slower. The same as the 50th percentile. Unlike the average, outliers don't move it.

🛠️ **In JMeter:** **Median** column in the Aggregate Report and dashboard Statistics table.

💬 **Example:** 100, 110, 120, 130, 2,000 ms. Median = 120 ms (average = 492 ms).

🔗 **See also:** [Average](#average) · [Percentile](#percentile)

<a id="memory-leak"></a>

### Memory leak

**Category:** 🖥️ System behaviour and resources

Memory that the application allocates but never releases. Memory use creeps up over hours until the application slows down (constant GC) or crashes with an out-of-memory error.

💬 **Example:** Heap after GC is 1.1 GB at hour 1, 1.6 GB at hour 4, 2.3 GB at hour 8, with the same load. That steady climb is a leak.

🔗 **See also:** [Endurance testing](#endurance-testing) · [Garbage collection (GC)](#garbage-collection) · [Resource utilization](#resource-utilization)

<a id="metrics"></a>

### Metrics

**Also called:** Measurements, Counters &nbsp;|&nbsp; **Category:** ⏱️ Metrics and timing

Measurements collected during a test. Usually grouped as client-side (response time, throughput, errors from JMeter) and server-side (CPU, memory, disk, network, GC, database), plus network, application, service-level and business metrics.

🔗 **See also:** [Network-specific metrics](#network-metrics) · [Platform-specific metrics](#platform-metrics) · [Application-specific metrics](#application-metrics) · [Service-level metrics](#service-level-metrics) · [Business metrics](#business-metrics) · [KPI (Key Performance Indicator)](#kpi)

<a id="mime-type"></a>

### MIME type

**Also called:** Content type, Media type &nbsp;|&nbsp; **Category:** 🌐 Web and protocol

A label that tells the receiver what kind of content is in a message, for example `text/html`, `application/json`, `image/png`. Sent in the `Content-Type` header.

🛠️ **In JMeter:** Set it with an **HTTP Header Manager** (`Content-Type: application/json`) when sending a body. The `dataType` column shows `text` or `bin`.

🔗 **See also:** [Payload](#payload) · [HTTP status code](#http-status-code)

<a id="min"></a>

### Minimum time

**Also called:** Min, Minimum response time &nbsp;|&nbsp; **Category:** 📊 Statistics

The fastest single sample in the result set. Often close to the best case: no load, warm caches.

🛠️ **In JMeter:** **Min** column in the Aggregate and Summary Reports.

🔗 **See also:** [Maximum time](#max) · [Average](#average) · [Median](#median)

<a id="monitoring"></a>

### Monitoring

**Also called:** Server-side monitoring, Observability &nbsp;|&nbsp; **Category:** 🔄 Process and practice

Collecting server-side and application metrics while the test runs, so you can explain the client-side results. A load test without monitoring tells you **what** happened but not **why**.

🛠️ **In JMeter:** Use external tools (Prometheus, Grafana, cloud monitoring, APM). The **PerfMon** plugin can collect basic server metrics into JMeter.

🔗 **See also:** [APM (Application Performance Monitoring)](#apm) · [Metrics](#metrics) · [Real-time results](#real-time-monitoring)

[⬆️ Back to letters](#letters)

---

<a id="letter-n"></a>

## N

<a id="network-metrics"></a>

### Network-specific metrics

**Category:** ⏱️ Metrics and timing

Metrics about the network: bandwidth used, packets lost, retransmissions, round-trip time, open connections, DNS lookup time.

🔗 **See also:** [Metrics](#metrics) · [Bandwidth](#bandwidth) · [Round-trip time (RTT)](#round-trip-time)

<a id="nfr"></a>

### NFR (Non-functional requirement)

**Also called:** Non-functional requirement, Quality attribute &nbsp;|&nbsp; **Category:** 🎯 Requirements and goals

A requirement about **how well** the system works rather than **what** it does: performance, availability, security, usability. A good performance NFR is measurable.

💬 **Example:** Good: "95% of product searches complete within 2 seconds with 500 concurrent users and less than 1% errors." Bad: "Search must be fast."

🔗 **See also:** [Performance requirement](#performance-requirement) · [Acceptance criteria](#acceptance-criteria) · [SLA (Service Level Agreement)](#sla)

<a id="normal-distribution"></a>

### Normal distribution

**Also called:** Gaussian distribution, Bell curve &nbsp;|&nbsp; **Category:** 📊 Statistics

A bell-shaped spread of values around the average: most values close to the middle, fewer far away. Response times are rarely normal; they usually have a long tail of slow values.

🛠️ **In JMeter:** The **Gaussian Random Timer** produces think times that follow a normal distribution (constant offset + random deviation).

🔗 **See also:** [Uniform distribution](#uniform-distribution) · [Standard deviation](#standard-deviation) · [Long tail](#long-tail)

[⬆️ Back to letters](#letters)

---

<a id="letter-o"></a>

## O

<a id="open-model"></a>

### Open workload model

**Also called:** Open model, Arrival-based model &nbsp;|&nbsp; **Category:** 🏋️ Load modelling

A model where new users **arrive at a rate**, whatever the state of the system. If the system slows down, users pile up, as in real life on a public website.

🛠️ **In JMeter:** **Open Model Thread Group** (JMeter 5.5 and later), with a schedule such as `rate(0/min) random_arrivals(10 min) rate(600/min)`. Plugins: Arrivals Thread Group.

🔗 **See also:** [Closed workload model](#closed-model) · [Arrival rate](#arrival-rate) · [Coordinated omission](#coordinated-omission)

<a id="outlier"></a>

### Outlier

**Category:** 📊 Statistics

A value far from the rest, for example one 9-second response among thousands of 200 ms ones. Outliers distort the average and maximum. Investigate them; don't simply delete them.

🔗 **See also:** [Average](#average) · [Maximum time](#max) · [Percentile](#percentile) · [Long tail](#long-tail)

[⬆️ Back to letters](#letters)

---

<a id="letter-p"></a>

## P

<a id="pacing"></a>

### Pacing

**Also called:** Iteration pacing &nbsp;|&nbsp; **Category:** 🏋️ Load modelling

Controlling how often each virtual user starts an iteration, so the request rate stays fixed even if response times change. Different from think time, which is a pause between steps.

🛠️ **In JMeter:** **Constant Throughput Timer**, **Precise Throughput Timer**, or a **Flow Control Action** with a calculated pause.

💬 **Example:** Pacing of 60 seconds: each user starts one checkout per minute. If the checkout takes 15 s, the user waits 45 s; if it takes 25 s, the user waits 35 s.

🔗 **See also:** [Think time](#think-time) · [Constant Throughput Timer](#constant-throughput-timer) · [Arrival rate](#arrival-rate)

<a id="page-load-time"></a>

### Page load time

**Also called:** Page response time, End-user response time &nbsp;|&nbsp; **Category:** 🌐 Web and protocol

The time until a web page is usable in the browser: HTML, embedded resources, rendering and JavaScript. Measured by browser tools (Lighthouse, WebPageTest, Core Web Vitals such as LCP and INP), **not** by JMeter.

🛠️ **In JMeter:** JMeter works at the protocol level. Its times are server and network time only. Pair it with a browser tool for front-end timings.

🔗 **See also:** [Response time](#response-time) · [Embedded resources](#embedded-resources)

<a id="parameterization"></a>

### Parameterization

**Also called:** Data-driven testing &nbsp;|&nbsp; **Category:** 🛠️ JMeter concepts

Replacing fixed values in a script with variables fed from test data, so each virtual user and iteration sends different, realistic data.

🛠️ **In JMeter:** **CSV Data Set Config**, functions such as `${__Random()}`, `${__RandomString()}`, `${__UUID()}`, and properties via `${__P()}`.

🔗 **See also:** [CSV Data Set Config](#csv-data-set) · [Test data](#test-data) · [Correlation](#correlation) · [Cache](#cache)

<a id="payload"></a>

### Payload

**Also called:** Request body, Response body, Message size &nbsp;|&nbsp; **Category:** 🌐 Web and protocol

The data carried in the **body** of a request or response, not counting headers. For example, the JSON sent to create an order, or the HTML returned for a page.

🛠️ **In JMeter:** Request payload: HTTP Request > **Body Data** tab. Sizes are recorded in `bytes` (received) and `sentBytes`. Reports show **Received KB/sec** and **Sent KB/sec**. The Size Assertion can check response size.

> ⚠️ **Watch out:** Payload size affects response time and bandwidth. Test with realistic payloads: a 1 KB test order is not the same as a 200 KB real one.

🔗 **See also:** [Bandwidth](#bandwidth) · [MIME type](#mime-type) · [Elapsed time](#elapsed-time)

<a id="peak-load"></a>

### Peak load

**Also called:** Peak hour load, Busy hour &nbsp;|&nbsp; **Category:** 🏋️ Load modelling

The highest load expected in normal business, for example Monday 9:00 or the end-of-month billing run. Load tests are usually designed around it.

🔗 **See also:** [Load testing](#load-testing) · [Headroom](#headroom) · [Workload model](#workload-model)

<a id="percentile"></a>

### Percentile

**Also called:** 90% line, 95% line, 99% line, p90, p95, p99, Quantile &nbsp;|&nbsp; **Category:** 📊 Statistics

The value below which a given percentage of samples fall. **90th percentile (p90) = 2 s** means 90% of requests took 2 s or less and 10% took longer. The most useful single number for setting response time targets.

🛠️ **In JMeter:** Aggregate Report columns **90% Line**, **95% Line**, **99% Line**, also in the HTML dashboard. Change which percentiles are shown with `aggregate_rpt_pct1`, `aggregate_rpt_pct2`, `aggregate_rpt_pct3` in `user.properties`.

💬 **Example:** 1,000 login requests sorted by time. The 900th value is 1.8 s. So p90 = 1.8 s: 900 users waited 1.8 s or less, 100 users waited longer.

> ⚠️ **Watch out:** Percentiles **cannot be averaged** across samplers or test runs. Calculate them again from the raw results.

🔗 **See also:** [Median](#median) · [Average](#average) · [Long tail](#long-tail) · [SLA (Service Level Agreement)](#sla)

<a id="performance-acceptance-criteria"></a>

### Performance acceptance criteria

**Also called:** Acceptance criteria, Pass/fail criteria, Exit criteria &nbsp;|&nbsp; **Category:** 🎯 Requirements and goals

The measurable conditions a test result must meet to pass, agreed **before** the test. Usually a response time percentile, an error rate and a throughput, at a stated load.

💬 **Example:** At 500 concurrent users for 60 minutes: p95 Search ≤ 2 s, p95 Checkout ≤ 3 s, error rate < 1%, ≥ 40 orders per minute.

🔗 **See also:** [NFR (Non-functional requirement)](#nfr) · [Performance threshold](#performance-threshold) · [SLA (Service Level Agreement)](#sla)

<a id="performance-budget"></a>

### Performance budget

**Category:** 🎯 Requirements and goals

A limit placed on a metric that the team agrees not to exceed, then shares out between parts of the system. Common for web pages (page weight, number of requests, load time) and for end-to-end response times split across services.

💬 **Example:** Checkout must finish in 2 s: API gateway 100 ms, order service 400 ms, payment provider 1,000 ms, database 300 ms, spare 200 ms.

🔗 **See also:** [Performance threshold](#performance-threshold) · [Performance target](#performance-target)

<a id="performance-goal"></a>

### Performance goal

**Also called:** Goal &nbsp;|&nbsp; **Category:** 🎯 Requirements and goals

A performance level the team **wants** to reach but that is not mandatory. Missing a goal is a discussion; missing a requirement is a failure.

🔗 **See also:** [Performance requirement](#performance-requirement) · [Performance target](#performance-target) · [Performance objective](#performance-objective)

<a id="performance-objective"></a>

### Performance objective

**Also called:** Objective &nbsp;|&nbsp; **Category:** 🎯 Requirements and goals

A measurable value the team uses to judge results, usually derived from goals and requirements, for example "handle 1,500 orders per hour". In SRE practice, the same idea is called an SLO.

🔗 **See also:** [Performance goal](#performance-goal) · [SLO (Service Level Objective)](#slo) · [Performance testing objective](#performance-testing-objective)

<a id="regression-testing"></a>

### Performance regression testing

**Also called:** Performance regression &nbsp;|&nbsp; **Category:** 🧪 Test types

Running the same performance test on each new build and comparing with the baseline, to catch changes that make the system slower.

🔗 **See also:** [Baseline testing](#baseline-testing) · [Continuous performance testing](#continuous-performance-testing)

<a id="performance-requirement"></a>

### Performance requirement

**Also called:** Requirement &nbsp;|&nbsp; **Category:** 🎯 Requirements and goals

A performance level the system **must** meet, often from a contract, regulation or business commitment. Not negotiable without sign-off.

🔗 **See also:** [NFR (Non-functional requirement)](#nfr) · [SLA (Service Level Agreement)](#sla) · [Performance goal](#performance-goal)

<a id="performance-target"></a>

### Performance target

**Also called:** Target &nbsp;|&nbsp; **Category:** 🎯 Requirements and goals

The desired value for a metric, expressed as a number, for example "p95 login time 1.5 s". Targets turn goals and requirements into something you can measure.

🔗 **See also:** [Performance threshold](#performance-threshold) · [Performance goal](#performance-goal)

<a id="performance-testing"></a>

### Performance testing

**Category:** 🧪 Test types

The umbrella term for all testing that checks how a system behaves under a workload: speed, throughput, stability and resource use. Load, stress, spike, soak, volume, capacity, scalability, baseline and benchmark testing are all types of it. See [PTT#00](Performance-Testing-Types.md#ptt00).

🔗 **See also:** [Load testing](#load-testing) · [Stress testing](#stress-testing) · [Baseline testing](#baseline-testing)

<a id="performance-testing-objective"></a>

### Performance testing objective

**Also called:** Test objective &nbsp;|&nbsp; **Category:** 🎯 Requirements and goals

What a specific test run is meant to find out, for example "find the capacity of the new search service" or "check that release 4.2 is no slower than 4.1". Defines the test type and the load profile.

🔗 **See also:** [Performance objective](#performance-objective) · [Performance testing](#performance-testing)

<a id="performance-threshold"></a>

### Performance threshold

**Also called:** Threshold, Limit &nbsp;|&nbsp; **Category:** 🎯 Requirements and goals

The worst acceptable value for a metric. Crossing it is a failure.

🛠️ **In JMeter:** A **Duration Assertion** can fail samples above a threshold. Tools such as Taurus or CI plugins can fail a pipeline on thresholds.

💬 **Example:** Target p95 = 1.5 s (what we aim for). Threshold p95 = 3 s (beyond this we fail the build).

🔗 **See also:** [Performance target](#performance-target) · [Performance acceptance criteria](#performance-acceptance-criteria)

<a id="tuning"></a>

### Performance tuning

**Also called:** Tuning, Optimisation &nbsp;|&nbsp; **Category:** 🔄 Process and practice

Changing configuration, code or infrastructure to improve performance, then re-testing to prove the change helped. Change **one thing at a time**.

🔗 **See also:** [Bottleneck](#bottleneck) · [Investigation](#investigation) · [Baseline testing](#baseline-testing)

<a id="platform-metrics"></a>

### Platform-specific metrics

**Also called:** Infrastructure metrics, System metrics, Server-side metrics &nbsp;|&nbsp; **Category:** ⏱️ Metrics and timing

Metrics from the servers and runtime: CPU, memory, disk I/O, network I/O, JVM heap and GC, database connections, thread pools.

🔗 **See also:** [Metrics](#metrics) · [Resource utilization](#resource-utilization) · [CPU utilization](#cpu-utilization)

<a id="post-processor"></a>

### Post-processor

**Category:** 🛠️ JMeter concepts

A JMeter element that runs **after** its sampler, usually to extract values from the response (correlation).

🛠️ **In JMeter:** Regular Expression Extractor, JSON Extractor, Boundary Extractor, CSS Selector Extractor, XPath2 Extractor, JSR223 PostProcessor.

🔗 **See also:** [Correlation](#correlation) · [Pre-processor](#pre-processor) · [Execution order (JMeter)](#execution-order)

<a id="pre-processor"></a>

### Pre-processor

**Category:** 🛠️ JMeter concepts

A JMeter element that runs **before** its sampler, usually to prepare data (generate a value, sign a request, change a parameter).

🛠️ **In JMeter:** JSR223 PreProcessor, User Parameters, HTML Link Parser and others.

🔗 **See also:** [Post-processor](#post-processor) · [Execution order (JMeter)](#execution-order)

<a id="production-environment"></a>

### Production environment

**Also called:** Production, Live, Prod &nbsp;|&nbsp; **Category:** 🏗️ Environments and infrastructure

The live system used by real users. Testing here gives the most realistic results but carries real risk to users and data, so it needs careful planning and approval.

🔗 **See also:** [Staging environment](#staging-environment) · [Test environment](#test-environment)

<a id="profiling"></a>

### Profiling

**Also called:** Code profiling &nbsp;|&nbsp; **Category:** 🔄 Process and practice

Measuring where an application spends its time and memory, method by method, to find the code causing a slowdown.

🔗 **See also:** [APM (Application Performance Monitoring)](#apm) · [Investigation](#investigation) · [Bottleneck](#bottleneck)

<a id="proxy"></a>

### Proxy

**Also called:** Proxy server &nbsp;|&nbsp; **Category:** 🌐 Web and protocol

A server that sits between a client and the target server and forwards requests. JMeter can act as a proxy to **record** browser traffic into a script, and can also send its own traffic **through** a corporate proxy.

🛠️ **In JMeter:** Recording: **HTTP(S) Test Script Recorder** (default port 8888). Sending through a corporate proxy: `jmeter -H proxy.host -P 8080` or the HTTP Request **Advanced** tab.

🔗 **See also:** [Recording](#recording) · [Correlation](#correlation)

[⬆️ Back to letters](#letters)

---

<a id="letter-q"></a>

## Q

<a id="queueing"></a>

### Queueing

**Also called:** Queue time, Wait time &nbsp;|&nbsp; **Category:** 🖥️ System behaviour and resources

Requests waiting for a busy resource (CPU, thread, connection, lock). Once a resource is near 100% busy, queues grow quickly and response times rise sharply even though the work per request is unchanged.

🔗 **See also:** [Saturation](#saturation) · [Connection pool](#connection-pool) · [Thread pool](#thread-pool) · [Knee point](#knee)

[⬆️ Back to letters](#letters)

---

<a id="letter-r"></a>

## R

<a id="ramp-down"></a>

### Ramp-down

**Also called:** Ramp-down period, Shutdown time, Cool-down &nbsp;|&nbsp; **Category:** 🏋️ Load modelling

The period at the end of a test when load is **gradually reduced** to zero, instead of stopping every user at once. Shows whether the system recovers cleanly.

🛠️ **In JMeter:** The classic Thread Group has **no** ramp-down: when the duration ends, all threads stop. Use the **Open Model Thread Group** (schedule the rate down) or the **Ultimate Thread Group** plugin (Shutdown Time column).

🔗 **See also:** [Ramp-up](#ramp-up) · [Steady state](#steady-state) · [Load profile](#load-profile)

<a id="ramp-up"></a>

### Ramp-up

**Also called:** Ramp-up period, Ramp-up time &nbsp;|&nbsp; **Category:** 🏋️ Load modelling

The period at the start of a test when load is **gradually increased** to the target level, so the system warms up the way it would in real life.

🛠️ **In JMeter:** Thread Group > **Ramp-up period (seconds)**. JMeter starts a new thread every ramp-up ÷ threads seconds.

💬 **Example:** 100 threads, ramp-up 200 s: one new user every 2 seconds. All 100 are running after 200 s.

> ⚠️ **Watch out:** Leave ramp-up samples out of the pass/fail statistics. They describe a warming system, not steady load.

🔗 **See also:** [Ramp-down](#ramp-down) · [Steady state](#steady-state) · [Warm-up](#warm-up) · [Load profile](#load-profile)

<a id="real-time-monitoring"></a>

### Real-time results

**Also called:** Live results, Live dashboard &nbsp;|&nbsp; **Category:** 🔄 Process and practice

Watching test results (response times, throughput, errors) live during the run, so you can stop a test that has clearly failed instead of waiting hours.

🛠️ **In JMeter:** **Backend Listener** to InfluxDB + Grafana, or the CLI summariser lines (`summary +` / `summary =`) printed every 30 seconds.

🔗 **See also:** [Backend Listener](#backend-listener) · [Monitoring](#monitoring)

<a id="recording"></a>

### Recording

**Also called:** Script recording, Capture &nbsp;|&nbsp; **Category:** 🛠️ JMeter concepts

Capturing the requests a browser sends while a person clicks through a journey, to create the first version of a script. Recorded scripts always need correlation and parameterization before use.

🛠️ **In JMeter:** **HTTP(S) Test Script Recorder**, with the browser set to use JMeter as its proxy and JMeter's certificate installed.

🔗 **See also:** [Proxy](#proxy) · [Correlation](#correlation) · [Parameterization](#parameterization)

<a id="resource-utilization"></a>

### Resource utilization

**Also called:** Utilization, Resource usage &nbsp;|&nbsp; **Category:** 🖥️ System behaviour and resources

How much of each resource is in use during the test: CPU, memory, disk I/O, network, threads, connections. Explains **why** response times change.

🔗 **See also:** [CPU utilization](#cpu-utilization) · [Saturation](#saturation) · [Platform-specific metrics](#platform-metrics) · [Bottleneck](#bottleneck)

<a id="response-time"></a>

### Response time

**Also called:** RT, Response duration &nbsp;|&nbsp; **Category:** ⏱️ Metrics and timing

The time a user or client waits from sending a request to receiving the complete response. The word is used for different scopes: **one request**, **one business transaction** (several requests), or **end-user** time including browser rendering.

🛠️ **In JMeter:** JMeter's response time is the **elapsed time** of a sample. For a Transaction Controller it is the sum of its children. JMeter does not include browser rendering.

> ⚠️ **Watch out:** Agree which scope a target means. "Login under 2 s" for the API call alone is easy; for the whole page as the user sees it, much harder.

🔗 **See also:** [Elapsed time](#elapsed-time) · [Latency](#latency) · [Page load time](#page-load-time) · [Percentile](#percentile)

<a id="results-file"></a>

### Results file (JTL)

**Also called:** JTL, Result log &nbsp;|&nbsp; **Category:** 🛠️ JMeter concepts

The file where JMeter writes one line per sample during a test. Used to create reports after the run.

🛠️ **In JMeter:** `jmeter -n -t plan.jmx -l results.jtl`. Prefer CSV format (see [TOD#010](TOD.md#tod010)). Columns include `timeStamp`, `elapsed`, `label`, `responseCode`, `success`, `bytes`, `sentBytes`, `grpThreads`, `allThreads`, `Latency`, `IdleTime`, `Connect`.

🔗 **See also:** [HTML dashboard report](#html-dashboard) · [Listener](#listener)

<a id="round-trip-time"></a>

### Round-trip time (RTT)

**Also called:** RTT, Ping time, Network latency &nbsp;|&nbsp; **Category:** 🌐 Web and protocol

The time for a small packet to travel from client to server and back, with no server processing. A property of the network distance, not the application.

💬 **Example:** London to Sydney is about 250 ms RTT. A page that needs 20 sequential round trips can never load in under 5 s from Sydney, however fast the server.

🔗 **See also:** [Latency](#latency) · [Bandwidth](#bandwidth) · [Network-specific metrics](#network-metrics)

[⬆️ Back to letters](#letters)

---

<a id="letter-s"></a>

## S

<a id="sampler"></a>

### Sampler

**Category:** 🛠️ JMeter concepts

A JMeter element that sends a request and measures the result: HTTP Request, JDBC Request, JMS, FTP, TCP, JSR223 and others. Each execution creates one **sample**.

🛠️ **In JMeter:** Every row in a report is a sampler **label**. Give samplers clear, unique names, for example `01_Login_POST`.

🔗 **See also:** [Execution order (JMeter)](#execution-order) · [Assertion](#assertion) · [Listener](#listener)

<a id="saturation"></a>

### Saturation

**Also called:** Saturation point &nbsp;|&nbsp; **Category:** 🖥️ System behaviour and resources

The state where a resource is fully used, so extra work has to wait in a queue. Beyond the saturation point, throughput stops rising and response times climb sharply.

🔗 **See also:** [Knee point](#knee) · [Bottleneck](#bottleneck) · [Queueing](#queueing) · [Capacity](#capacity)

<a id="scalability"></a>

### Scalability

**Also called:** Scale up, Scale out &nbsp;|&nbsp; **Category:** 🖥️ System behaviour and resources

The ability of a system to handle more load by adding resources. **Vertical** scaling adds power to one machine (more CPU, more memory). **Horizontal** scaling adds more machines.

🔗 **See also:** [Scalability testing](#scalability-testing) · [Capacity](#capacity) · [Elasticity](#elasticity)

<a id="scalability-testing"></a>

### Scalability testing

**Category:** 🧪 Test types

A test that checks how capacity changes when resources are added or removed. See [PTT#08](Performance-Testing-Types.md#ptt08).

🔗 **See also:** [Scalability](#scalability) · [Capacity testing](#capacity-testing)

<a id="scenario"></a>

### Scenario

**Also called:** Test scenario, User journey &nbsp;|&nbsp; **Category:** 🏋️ Load modelling

One realistic user journey (Login > Search > Add to cart > Checkout) or one complete test configuration (which journeys, how many users, for how long). Clarify which one you mean.

🛠️ **In JMeter:** A journey is usually one **Thread Group** or one **Test Fragment**. A full test scenario is the whole **Test Plan** with its load settings.

🔗 **See also:** [Workload model](#workload-model) · [Business transaction](#business-transaction) · [Transaction mix](#transaction-mix)

<a id="service-level-metrics"></a>

### Service-level metrics

**Also called:** SLI (Service Level Indicator) &nbsp;|&nbsp; **Category:** ⏱️ Metrics and timing

Metrics that show whether agreed service levels are met: response time percentiles, availability, error rate, throughput. They are what SLAs and SLOs are written in.

🔗 **See also:** [SLA (Service Level Agreement)](#sla) · [SLO (Service Level Objective)](#slo) · [Metrics](#metrics)

<a id="session"></a>

### Session

**Also called:** User session, Session management &nbsp;|&nbsp; **Category:** 🌐 Web and protocol

The server's memory of one user across several requests (who is logged in, what is in the cart). Usually tied to the user by a cookie or token.

🛠️ **In JMeter:** **HTTP Cookie Manager** keeps each thread's cookies separate, so every virtual user has its own session.

🔗 **See also:** [Session ID](#session-id) · [Correlation](#correlation) · [Cookie](#cookie)

<a id="session-id"></a>

### Session ID

**Also called:** JSESSIONID, Token &nbsp;|&nbsp; **Category:** 🌐 Web and protocol

A unique value that identifies a user's session, sent as a cookie, URL parameter or header. It changes on every login, so it must be captured, never hard-coded.

🔗 **See also:** [Session](#session) · [Correlation](#correlation) · [Dynamic data](#dynamic-data)

<a id="setup-teardown"></a>

### Setup and Teardown

**Also called:** setUp, tearDown &nbsp;|&nbsp; **Category:** 🛠️ JMeter concepts

**Setup**: work done once **before** the test (create users, load data, get an admin token). **Teardown**: work done once **after** (delete test data, reset state).

🛠️ **In JMeter:** **setUp Thread Group** runs before all normal Thread Groups. **tearDown Thread Group** runs after them. Their samples are in the results, so exclude them from statistics if needed.

🔗 **See also:** [Test data](#test-data)

<a id="shift-left"></a>

### Shift-left performance testing

**Category:** 🔄 Process and practice

Starting performance testing early in development (component, API and CI tests) instead of only before go-live. Problems found early are cheaper to fix.

🔗 **See also:** [Continuous performance testing](#continuous-performance-testing) · [Component testing](#component-testing) · [Baseline testing](#baseline-testing)

<a id="shutdown"></a>

### Shutdown test

**Also called:** Graceful shutdown &nbsp;|&nbsp; **Category:** 🛠️ JMeter concepts

A **graceful** stop: JMeter lets every thread finish its current sample, then stops. Results stay clean.

🛠️ **In JMeter:** GUI: **Run > Shutdown** (`Ctrl + ,`). CLI: run `bin/shutdown.sh` (or `shutdown.cmd`).

🔗 **See also:** [Stop test](#stop-test)

<a id="simultaneous-users"></a>

### Simultaneous users

**Also called:** Simultaneous requests &nbsp;|&nbsp; **Category:** 🏋️ Load modelling

Users who send a request at **exactly the same moment**. Always a much smaller number than concurrent users.

🛠️ **In JMeter:** **Synchronizing Timer**: holds threads until N are waiting, then releases them together.

💬 **Example:** A booking site has 2,000 concurrent users, but at any instant only 20 to 40 are actually sending a request.

🔗 **See also:** [Concurrent users](#concurrent-users) · [Concurrency testing](#concurrency-testing)

<a id="sla"></a>

### SLA (Service Level Agreement)

**Also called:** Service Level Agreement &nbsp;|&nbsp; **Category:** 🎯 Requirements and goals

A formal, often contractual agreement between a provider and a customer on service levels, such as availability and response time, sometimes with penalties if missed.

🔗 **See also:** [SLO (Service Level Objective)](#slo) · [Service-level metrics](#service-level-metrics) · [Performance requirement](#performance-requirement)

<a id="slo"></a>

### SLO (Service Level Objective)

**Also called:** Service Level Objective &nbsp;|&nbsp; **Category:** 🎯 Requirements and goals

An internal target for a service level, usually stricter than the SLA so there is a safety margin. Measured by SLIs (service level indicators).

💬 **Example:** SLA: 99.5% of requests under 3 s. SLO: 99% of requests under 2 s.

🔗 **See also:** [SLA (Service Level Agreement)](#sla) · [Service-level metrics](#service-level-metrics) · [Performance objective](#performance-objective)

<a id="smoke-testing"></a>

### Smoke testing

**Also called:** Smoke test, Shakedown test &nbsp;|&nbsp; **Category:** 🧪 Test types

A short, low-load run (a few users, a few minutes) to prove the script, data and environment work before a bigger test. See [PTT#10](Performance-Testing-Types.md#ptt10).

🔗 **See also:** [Baseline testing](#baseline-testing) · [Load testing](#load-testing)

<a id="spike-testing"></a>

### Spike testing

**Category:** 🧪 Test types

A test where load jumps **suddenly** far above normal, then drops back, to see if the system survives and recovers. See [PTT#04](Performance-Testing-Types.md#ptt04).

🔗 **See also:** [Stress testing](#stress-testing) · [Elasticity](#elasticity)

<a id="staging-environment"></a>

### Staging environment

**Also called:** Pre-production, Pre-prod, Performance environment &nbsp;|&nbsp; **Category:** 🏗️ Environments and infrastructure

A pre-production environment built to be as close to production as possible (size, configuration, data). The usual home for serious performance tests.

> ⚠️ **Watch out:** If staging has half the servers of production, results don't scale linearly. Record the differences and agree how results will be interpreted.

🔗 **See also:** [Test environment](#test-environment) · [Production environment](#production-environment)

<a id="standard-deviation"></a>

### Standard deviation

**Also called:** Std. Dev., SD, σ &nbsp;|&nbsp; **Category:** 📊 Statistics

A measure of how spread out values are around the average. A small standard deviation means consistent response times; a large one means they vary a lot.

🛠️ **In JMeter:** **Std. Dev.** column in the Summary Report.

💬 **Example:** Average 500 ms, std. dev. 50 ms: steady. Average 500 ms, std. dev. 900 ms: some requests are very slow; look at the percentiles.

🔗 **See also:** [Average](#average) · [Percentile](#percentile) · [Normal distribution](#normal-distribution)

<a id="steady-state"></a>

### Steady state

**Also called:** Hold period, Plateau &nbsp;|&nbsp; **Category:** 🏋️ Load modelling

The part of the test where the target load is held constant after ramp-up. Measure and judge results here.

🔗 **See also:** [Ramp-up](#ramp-up) · [Ramp-down](#ramp-down) · [Duration](#duration)

<a id="stop-test"></a>

### Stop test

**Category:** 🛠️ JMeter concepts

An **immediate** stop: JMeter interrupts running threads, so samples in progress may end as errors.

🛠️ **In JMeter:** GUI: **Run > Stop** (`Ctrl + .`). CLI: run `bin/stoptest.sh` (or `stoptest.cmd`). Prefer Shutdown unless the test is harming the system.

🔗 **See also:** [Shutdown test](#shutdown)

<a id="stress-testing"></a>

### Stress testing

**Category:** 🧪 Test types

A test that pushes load **beyond** the expected peak, until something fails, to learn how the system fails and recovers. See [PTT#03](Performance-Testing-Types.md#ptt03).

🔗 **See also:** [Load testing](#load-testing) · [Breakpoint testing](#breakpoint) · [Spike testing](#spike-testing)

<a id="summary-report"></a>

### Summary Report

**Category:** 🛠️ JMeter concepts

A JMeter listener similar to the Aggregate Report, using less memory. Shows samples, average, min, max, std. dev., error %, throughput, KB/sec and average bytes, but no percentiles.

🔗 **See also:** [Aggregate Report](#aggregate-report) · [Listener](#listener)

<a id="system-properties"></a>

### System properties

**Category:** 🛠️ JMeter concepts

Java system properties for the JVM that runs JMeter, such as proxy, SSL or DNS settings. Stored in `bin/system.properties`.

🛠️ **In JMeter:** Set from the CLI with `-Dname=value`. Read with `${__P()}` only if also defined as a JMeter property; otherwise use `System.getProperty()` in JSR223.

🔗 **See also:** [JMeter properties](#jmeter-properties) · [User properties](#user-properties)

[⬆️ Back to letters](#letters)

---

<a id="letter-t"></a>

## T

<a id="test-data"></a>

### Test data

**Category:** 🔄 Process and practice

The data a performance test uses: user accounts, products, search terms, and the data already in the database. Too little or too uniform data gives unrealistically good results.

🛠️ **In JMeter:** Feed it with **CSV Data Set Config**. Create it in a setUp Thread Group or before the test.

🔗 **See also:** [Parameterization](#parameterization) · [CSV Data Set Config](#csv-data-set) · [Volume testing](#volume-testing) · [Cache](#cache)

<a id="test-environment"></a>

### Test environment

**Also called:** Test bed, Performance environment &nbsp;|&nbsp; **Category:** 🏗️ Environments and infrastructure

The full set of hardware, software, network, configuration and data used to run the test. Must be documented with every result so tests can be compared.

🔗 **See also:** [Staging environment](#staging-environment) · [Production environment](#production-environment) · [Load generator](#load-generator)

<a id="test-plan"></a>

### Test plan (JMeter)

**Also called:** JMX, Script &nbsp;|&nbsp; **Category:** 🛠️ JMeter concepts

The root of a JMeter script (`.jmx` file). Holds thread groups, samplers and all other elements, plus plan-wide variables.

> ⚠️ **Watch out:** In general testing, "test plan" also means the planning **document**. Say "JMeter test plan" or "script" to avoid confusion.

🔗 **See also:** [Thread Group](#thread-group) · [Sampler](#sampler)

<a id="think-time"></a>

### Think time

**Also called:** User delay, Wait time &nbsp;|&nbsp; **Category:** 🏋️ Load modelling

The pause a real user takes between actions: reading a page, filling in a form. Leaving it out makes each virtual user much more aggressive than a real one.

🛠️ **In JMeter:** **Timers**: Constant Timer, Uniform Random Timer, Gaussian Random Timer, Poisson Random Timer. Or a **Flow Control Action** with a timer for one pause per step.

💬 **Example:** Real users spend about 8 s on a product page. Use a Uniform Random Timer of 5,000 ms + up to 6,000 ms random (5 to 11 s).

> ⚠️ **Watch out:** Think time is not counted in response time but it is part of total test time, so it lowers throughput. Use Little's Law to balance users and think time.

🔗 **See also:** [Timer](#timer) · [Pacing](#pacing) · [Little's Law](#littles-law) · [Concurrent users](#concurrent-users)

<a id="thread-group"></a>

### Thread Group

**Category:** 🛠️ JMeter concepts

The JMeter element that defines a group of virtual users: how many threads, ramp-up, loop count or duration. Each thread runs the samplers inside it.

🛠️ **In JMeter:** Classic **Thread Group**, **setUp / tearDown Thread Group**, **Open Model Thread Group** (5.5+). Plugins add Concurrency, Ultimate and Arrivals Thread Groups.

🔗 **See also:** [Virtual user (VU)](#virtual-user) · [Ramp-up](#ramp-up) · [Closed workload model](#closed-model) · [Open workload model](#open-model)

<a id="thread-pool"></a>

### Thread pool

**Category:** 🖥️ System behaviour and resources

A fixed set of worker threads in a server (for example Tomcat's `maxThreads`) that handle incoming requests. When all are busy, new requests queue or are rejected.

🔗 **See also:** [Connection pool](#connection-pool) · [Queueing](#queueing) · [Saturation](#saturation)

<a id="throughput"></a>

### Throughput

**Also called:** Requests per second (RPS), Transaction rate &nbsp;|&nbsp; **Category:** ⏱️ Metrics and timing

The amount of work a system completes per unit of time, for example **requests per second**, **transactions per second** or **orders per hour**. Can also be measured in bytes per second.

🛠️ **In JMeter:** **Throughput** column in the Aggregate and Summary Reports: samples ÷ (end of the last sample − start of the first sample). The unit (/sec, /min, /hour) is chosen automatically. HTML dashboard: **Transactions Per Second** chart.

💬 **Example:** 3,600 samples over 2 minutes = 30 requests per second.

> ⚠️ **Watch out:** Throughput that stops rising while you add users is a classic sign of saturation.

🔗 **See also:** [Transactions per second (TPS)](#transactions-per-second) · [Hits per second](#hits-per-second) · [Little's Law](#littles-law) · [Saturation](#saturation)

<a id="timeout"></a>

### Timeout

**Category:** 🌐 Web and protocol

The maximum time a client waits (to connect, or for a response) before giving up and reporting an error.

🛠️ **In JMeter:** HTTP Request > **Advanced** tab > Timeouts: **Connect** and **Response** (ms). With no value, JMeter may wait a very long time. Timeouts show as `Non HTTP response code: java.net.SocketTimeoutException`.

> ⚠️ **Watch out:** Set timeouts close to what real clients use (browsers, mobile apps, gateways). Otherwise threads hang and hide failures.

🔗 **See also:** [Error rate](#error-rate) · [HTTP status code](#http-status-code)

<a id="timer"></a>

### Timer

**Category:** 🛠️ JMeter concepts

A JMeter element that adds a pause **before** each sampler in its scope. Used for think time and for controlling throughput.

🛠️ **In JMeter:** Constant, Uniform Random, Gaussian Random, Poisson Random, Synchronizing, Constant Throughput and Precise Throughput Timers. Timers in the same scope **add up**.

> ⚠️ **Watch out:** A timer placed directly under the Thread Group applies to **every** sampler in it. Put it as a child of one sampler to pause only there.

🔗 **See also:** [Think time](#think-time) · [Pacing](#pacing) · [Execution order (JMeter)](#execution-order)

<a id="timings-explained"></a>

### Timings explained: connect, latency, elapsed

**Also called:** JMeter timings, Connect vs latency vs elapsed &nbsp;|&nbsp; **Category:** ⏱️ Metrics and timing

How JMeter's three timings nest inside each other for one HTTP sample:

```text
 request sent                     first byte                     last byte
      │                                │                               │
      ├── connect ──┤                  │                               │
      ├────────────── latency ─────────┤                               │
      ├─────────────────────────── elapsed time ───────────────────────┤
```

**Connect ≤ Latency ≤ Elapsed.** Latency − connect ≈ server processing + network. Elapsed − latency ≈ time to download the rest of the response.

🔗 **See also:** [Connect time](#connect-time) · [Latency](#latency) · [Elapsed time](#elapsed-time) · [Response time](#response-time)

<a id="transaction-controller"></a>

### Transaction Controller

**Category:** 🛠️ JMeter concepts

A JMeter logic controller that times a group of samplers as one **business transaction**, adding an extra result row for the whole group.

🛠️ **In JMeter:** Enable **Generate parent sample** to show only the transaction in reports. Timers and pre/post-processors are excluded from its time unless you tick **Include duration of timer and pre-post processors in generated sample**.

🔗 **See also:** [Business transaction](#business-transaction) · [Logic controller](#logic-controller) · [Response time](#response-time)

<a id="transaction-mix"></a>

### Transaction mix

**Also called:** Business mix, Traffic mix &nbsp;|&nbsp; **Category:** 🏋️ Load modelling

The proportion of each business transaction in the workload, normally taken from production analytics or logs.

🛠️ **In JMeter:** Model it with separate Thread Groups sized by percentage, or a **Throughput Controller** (percent executions).

💬 **Example:** Browse 60%, Search 25%, Add to cart 10%, Checkout 5%.

🔗 **See also:** [Workload model](#workload-model) · [Scenario](#scenario) · [Business transaction](#business-transaction)

<a id="transactions-per-second"></a>

### Transactions per second (TPS)

**Also called:** TPS &nbsp;|&nbsp; **Category:** ⏱️ Metrics and timing

Throughput counted in **business transactions** (Login, Checkout) rather than individual HTTP requests. One transaction may contain many requests.

🛠️ **In JMeter:** The HTML dashboard **Transactions Per Second** chart counts every sample label, including Transaction Controller samples.

🔗 **See also:** [Throughput](#throughput) · [Hits per second](#hits-per-second) · [Business transaction](#business-transaction)

[⬆️ Back to letters](#letters)

---

<a id="letter-u"></a>

## U

<a id="uniform-distribution"></a>

### Uniform distribution

**Category:** 📊 Statistics

Every value in a range is equally likely, for example any think time between 3 and 7 seconds.

🛠️ **In JMeter:** **Uniform Random Timer**: Constant Delay Offset + random value from 0 to Random Delay Maximum.

🔗 **See also:** [Normal distribution](#normal-distribution) · [Think time](#think-time)

<a id="unit-test"></a>

### Unit test (performance)

**Also called:** Micro-benchmark &nbsp;|&nbsp; **Category:** 🧪 Test types

A test of a single method or small piece of code, sometimes timed with micro-benchmark tools (JMH for Java). Done by developers; not a replacement for load testing.

🔗 **See also:** [Component testing](#component-testing) · [Shift-left performance testing](#shift-left)

<a id="user-abandonment"></a>

### User abandonment

**Also called:** Abandonment rate &nbsp;|&nbsp; **Category:** 🏋️ Load modelling

Real users giving up and leaving when a page is too slow. In a test, simulating abandonment stops unrealistic queues of users who would have left.

🛠️ **In JMeter:** Set realistic **response timeouts**, or use an If Controller to skip the rest of the journey when a step is too slow.

🔗 **See also:** [Timeout](#timeout) · [Open workload model](#open-model) · [Business metrics](#business-metrics)

<a id="user-properties"></a>

### User properties

**Category:** 🛠️ JMeter concepts

Your own JMeter settings, stored in `bin/user.properties`. They override `jmeter.properties` and survive upgrades. See [TOD#003](TOD.md#tod003).

🛠️ **In JMeter:** Add an extra file with `-q my.properties`.

🔗 **See also:** [JMeter properties](#jmeter-properties) · [System properties](#system-properties)

[⬆️ Back to letters](#letters)

---

<a id="letter-v"></a>

## V

<a id="validation-test"></a>

### Validation test

**Also called:** Verification test, Acceptance test &nbsp;|&nbsp; **Category:** 🧪 Test types

A test run to confirm that the system meets its stated performance requirements, usually the formal test before sign-off or go-live.

🔗 **See also:** [Performance acceptance criteria](#performance-acceptance-criteria) · [Load testing](#load-testing)

<a id="virtual-user"></a>

### Virtual user (VU)

**Also called:** VU, Vuser, Thread &nbsp;|&nbsp; **Category:** 🏋️ Load modelling

A simulated user created by the load tool. In JMeter, one **thread** = one virtual user, with its own cookies, variables and session.

🔗 **See also:** [Thread Group](#thread-group) · [Concurrent users](#concurrent-users) · [Active threads](#active-threads)

<a id="volume-testing"></a>

### Volume testing

**Also called:** Data volume testing, Flood testing &nbsp;|&nbsp; **Category:** 🧪 Test types

A test where the **data** is large (database size, file size, message size) rather than the number of users. See [PTT#06](Performance-Testing-Types.md#ptt06).

🔗 **See also:** [Test data](#test-data) · [Load testing](#load-testing)

[⬆️ Back to letters](#letters)

---

<a id="letter-w"></a>

## W

<a id="warm-up"></a>

### Warm-up

**Also called:** Warm-up period &nbsp;|&nbsp; **Category:** 🏋️ Load modelling

A short period at the start of a test that lets caches fill, JIT compilation finish and connection pools open. Exclude it from the results.

🛠️ **In JMeter:** Use ramp-up plus a short hold before measuring. Remove the first minutes when analysing, for example with the Filter Results Tool plugin (`--start-offset`).

🔗 **See also:** [Ramp-up](#ramp-up) · [Cache](#cache) · [Steady state](#steady-state)

<a id="worker"></a>

### Worker

**Also called:** Agent, Remote server, Slave (older term) &nbsp;|&nbsp; **Category:** 🏗️ Environments and infrastructure

In distributed testing, a machine that runs `jmeter-server` and generates load on the controller's command. Older documents call it a **slave** or **remote server**.

🔗 **See also:** [Distributed testing](#distributed-testing) · [Controller (distributed testing)](#controller) · [Load generator](#load-generator)

<a id="workload-model"></a>

### Workload model

**Also called:** Workload, Usage model &nbsp;|&nbsp; **Category:** 🏋️ Load modelling

The full description of the load a test applies: which transactions, in what mix, how many users or what arrival rate, think time, pacing, load profile and duration. Usually built from production data.

💬 **Example:** Peak hour: 1,200 concurrent users, 18,000 searches/hour, 2,400 orders/hour, average session 9 min, mix Browse 60% / Search 25% / Cart 10% / Checkout 5%.

🔗 **See also:** [Transaction mix](#transaction-mix) · [Load profile](#load-profile) · [Little's Law](#littles-law) · [Peak load](#peak-load)

[⬆️ Back to letters](#letters)

---

## 📚 References

- ISTQB Glossary: <https://glossary.istqb.org>
- Apache JMeter User's Manual: <https://jmeter.apache.org/usermanual/>
- JMeter Glossary (elapsed time, latency, connect time): <https://jmeter.apache.org/usermanual/glossary.html>
- Original list: [Glossary for Performance Testers, Pragmatic Test Labs (2023)](https://pragmatictestlabs.com/2023/02/25/glossary_for_performance_testers/)

> 📝 **Trainer's note:** Books, standards and vendors draw some of these lines differently. The definitions here follow common industry use and JMeter's own meaning. What matters most is that **your team agrees** on each word before the test is planned, and writes it down.

<!--
Template for a new term (keep alphabetical order, and update the HTML version too):

<a id="term-id"></a>

### Term

**Also called:** ... &nbsp;|&nbsp; **Category:** ...

Definition.

🛠️ **In JMeter:** ...

💬 **Example:** ...

> ⚠️ **Watch out:** ...

🔗 **See also:** [Other term](#other-id)
-->
