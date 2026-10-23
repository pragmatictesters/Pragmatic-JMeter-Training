# 🧭 Performance Testing Types

> Learn the vocabulary first. Every performance test answers **one specific question**.
> Pick the wrong type and you burn days of environment time, licences and people, and still don't get the answer you need.
> Written for JMeter trainees. JMeter references verified against **Apache JMeter 5.6.3**.

---

## 📚 Index

| #       | Type                                                       | The question it answers                                        | Level        |
|---------|------------------------------------------------------------|----------------------------------------------------------------|--------------|
| PTT#00  | [Performance Testing: The Umbrella Term ☂️](#ptt00)       | *How does the system behave under a workload?*                 | Beginner     |
| PTT#01  | [Baseline Testing 📏](#ptt01)                              | *Where are we today?*                                          | Beginner     |
| PTT#02  | [Load Testing 🏋️](#ptt02)                                  | *Do we meet our targets at expected load?*                     | Beginner     |
| PTT#03  | [Stress Testing 🔥](#ptt03)                                | *What breaks first, and how, beyond the expected load?*        | Intermediate |
| PTT#04  | [Spike Testing ⚡](#ptt04)                                 | *Can we survive a sudden burst of traffic?*                    | Intermediate |
| PTT#05  | [Endurance / Soak Testing ⏳](#ptt05)                      | *Do we stay healthy over many hours?*                          | Intermediate |
| PTT#06  | [Volume Testing 🗄️](#ptt06)                               | *Do we cope with large amounts of data?*                       | Intermediate |
| PTT#07  | [Capacity Testing 📦](#ptt07)                              | *How much can we handle while still meeting our targets?*      | Advanced     |
| PTT#08  | [Scalability Testing 📈](#ptt08)                           | *Does adding resources give us more capacity?*                 | Advanced     |
| PTT#09  | [Benchmark Testing 🏁](#ptt09)                             | *How do we compare with a standard, a rival or the last release?* | Intermediate |
| PTT#10  | [Other Types You Will Hear About 🧩](#ptt10)               | Smoke, breakpoint, concurrency, failover and more              | Intermediate |
| 🤔      | [Commonly Confused Pairs](#confused)                       | Load vs stress, baseline vs benchmark, ...                     | All          |
| 🧭      | [Choosing the Right Type](#choosing)                       | *Which test should I run, and when?*                           | All          |
| 📖      | [Key Terms Glossary](#glossary)                            | The words used throughout this document                        | All          |

---

<a id="ptt00"></a>

## PTT#00: Performance Testing: The Umbrella Term ☂️

**Category:** Foundations &nbsp;|&nbsp; **Level:** Beginner

### 🎯 What

**Performance testing** is the **umbrella term** for every kind of testing that checks how a system behaves under a workload: how **fast** it responds, how **much** work it can do, how **stable** it stays, and how well it uses its **resources**.

It is **not** one test. Load, stress, spike, soak, volume, capacity, scalability, baseline and benchmark testing are all **types of performance testing**. Each one shapes the workload differently to answer a different question.

```text
                       ☂️  PERFORMANCE TESTING
                                  │
   ┌──────────────┬───────────────┼───────────────┬────────────────┐
   │              │               │               │                │
 REFERENCE      TARGETS         LIMITS         TIME & DATA       GROWTH
 Baseline       Load            Stress         Endurance/Soak    Capacity
 Benchmark                      Spike          Volume            Scalability
```

### 💡 Why It Matters

Functional testing tells you the system gives the **right answer**. Performance testing tells you it gives the right answer **fast enough, for enough people, for long enough**. A correct page that takes 12 seconds to load is a failed page for the user.

Performance testing measures four things:

| Dimension         | Typical metrics                                              |
|-------------------|--------------------------------------------------------------|
| ⏱️ **Speed**       | Response time (average, 90th / 95th / 99th percentile)       |
| 🚚 **Throughput**  | Requests or transactions per second, hits per second         |
| 🧱 **Stability**   | Error rate, response time trend over time, recovery behaviour |
| 🖥️ **Resources**   | CPU, memory, disk I/O, network, threads, connection pools, GC |

### 🕒 When to Use It

Whenever the system has **non-functional requirements** (NFRs) such as "95% of searches under 2 seconds with 500 concurrent users". If nobody has written those down yet, the first job of a performance tester is to help write them. Without targets, results are just numbers.

> 💡 **Pro tip:** When someone asks you for "a performance test", your first reply should be a question: **"What decision will this test help us make?"** The answer tells you which type to run.

> 📝 **Trainer's note:** Different books and standards (ISTQB, vendors, blogs) draw the lines between some types slightly differently. The definitions here follow common industry use. What matters most is that your **team agrees** on what each word means before a test is planned.

---

<a id="ptt01"></a>

## PTT#01: Baseline Testing 📏

**Category:** Reference point &nbsp;|&nbsp; **Level:** Beginner

### 🎯 What

A **baseline test** measures the system's performance in a **known, controlled state** to create a **reference point**. Every later test is compared with it.

It is usually run at a **low, steady load** (sometimes a single user) on a stable build and environment, with the configuration fully recorded.

```text
 Users
   │
   │   ┌──────────────────────────┐   steady, low, repeatable
   │───┘                          └───
   └─────────────────────────────────────▶ Time
```

### 💡 Why It Matters

- Without a baseline you cannot say whether a result is **good, bad, better or worse**. "Login takes 800 ms" means nothing until you know it took 400 ms last month.
- It separates **application** problems from **environment** problems. If the single-user response time is already slow, adding load will not tell you anything new.
- It is the cheapest performance test you will ever run, and it makes every other test easier to read.

### 🕒 When to Use It

- ✅ At the **start** of any performance testing effort, before load, stress or soak.
- ✅ After a **major change**: new release, infrastructure move, framework upgrade, database migration.
- ✅ Regularly in **CI/CD**, so regressions are caught the day they are introduced.

### 🛠️ In JMeter

- A **Thread Group** with 1 to 5 threads and a fixed number of loops, or a fixed duration.
- Save results as **CSV** (see [TOD#010](TOD.md#tod010)) and **keep the file**, with the build number, date and environment in the file name.
- Generate the HTML dashboard (`-e -o`) and archive it next to the CSV.

> 💡 **Pro tip:** A baseline is only useful if you can **reproduce** it. Record the build, test data, environment size, JMeter version and test plan version alongside the results.

> ⚠️ **Watch out:** Re-baseline when the environment changes. Comparing a new result with a baseline from a different server size is comparing apples with oranges.

---

<a id="ptt02"></a>

## PTT#02: Load Testing 🏋️

**Category:** Core &nbsp;|&nbsp; **Level:** Beginner

### 🎯 What

A **load test** checks how the system performs under the **expected** workload: normal day-to-day traffic and the **expected peak** (for example the busiest hour of the busiest day). The question is simple: **do we meet our response time, throughput and error rate targets at the load we expect?**

```text
 Users
   │            expected peak
   │        ┌────────────────────┐
   │       ╱                      ╲
   │      ╱  ramp-up      steady   ╲ ramp-down
   │─────╱                          ╲─────
   └─────────────────────────────────────────▶ Time
```

### 💡 Why It Matters

- It is the test that answers **"are we ready to go live?"** against the agreed NFRs.
- It finds bottlenecks that only appear with **concurrency**: slow queries, locks, small connection pools, thread pool limits, chatty services.
- Most production incidents happen at **normal peak load**, not at extreme load. This is the test that prevents them.

### 🕒 When to Use It

- ✅ Before **every major release** or go-live.
- ✅ Before known **busy events** (sales, enrolment day, month-end, tax deadline).
- ✅ When verifying that a **performance fix** actually works under load.
- ❌ Not when you only want to find the breaking point. That is a **stress** or **capacity** test.

### 🛠️ In JMeter

- **Thread Group** with ramp-up, a fixed **duration** and enough threads to produce the target load, plus realistic **think time** with timers.
- To hit a target **throughput** (requests per second) rather than a number of users, use the **Precise Throughput Timer** or the **Constant Throughput Timer**, or the **Open Model Thread Group** (JMeter 5.5+).
- Always run in **CLI mode** (see [TOD#006](TOD.md#tod006)) with lightweight listeners (see [TOD#007](TOD.md#tod007)).

> 💡 **Pro tip:** Derive the target load from **production data** (web analytics, access logs, APM), not from guesses. "500 users" is meaningless until you know what those users do, and how often.

> ⚠️ **Watch out:** Measure the **steady-state** part only. Results from the ramp-up and ramp-down periods drag the averages around and hide the truth.

---

<a id="ptt03"></a>

## PTT#03: Stress Testing 🔥

**Category:** Limits &nbsp;|&nbsp; **Level:** Intermediate

### 🎯 What

A **stress test** pushes the system **beyond** its expected peak load, or starves it of resources, to see **where, when and how it breaks**, and whether it **recovers** once the pressure is removed.

```text
 Users
   │                                ✖ breaking point
   │                         ┌────┐
   │                    ┌────┘    │
   │               ┌────┘ beyond  │
   │ ─ ─ ─ ─ ─┌────┘ peak ─ ─ ─ ─ │ ─ ─ expected peak
   │     ┌────┘                   └──▶ recovery?
   │─────┘
   └──────────────────────────────────────────▶ Time
```

### 💡 Why It Matters

- Every system breaks eventually. Stress testing makes sure it breaks **gracefully**: clear error messages, queued requests, rate limiting, no data corruption, no cascading failure across other services.
- It identifies the **first bottleneck** (CPU, database, memory, connection pool, a third-party API), which tells the team where to invest.
- It checks **recovery**: does the system return to normal on its own when the load drops, or does it need a restart?

### 🕒 When to Use It

- ✅ After the system passes its **load test**. There is no point stressing a system that already fails at normal load.
- ✅ For systems where failure is **expensive**: payments, healthcare, public services, anything with a big launch.
- ✅ When the business asks **"what happens if we get twice the traffic?"**

### 🔍 What to Watch

- At what load did response times start to climb sharply (the **knee** of the curve)?
- Which **resource** saturated first?
- What did users see: slow pages, errors, timeouts, wrong data?
- How long did **recovery** take after the load dropped?

### 🛠️ In JMeter

- Increase load in **steps** and hold each step long enough to stabilise. The **Concurrency Thread Group** or **Ultimate Thread Group** (JMeter Plugins) make stepped profiles easy.
- Keep a **Duration Assertion** or response time thresholds so you can see exactly when targets were missed.

> 💡 **Pro tip:** Monitor the **servers**, not just JMeter. A stress test without CPU, memory, database and GC graphs tells you *that* it broke, but not *why*.

> ⚠️ **Watch out:** Make sure the **load generator** is not the thing that breaks. If the JMeter machine hits 90% CPU, add more load generators before blaming the application.

---

<a id="ptt04"></a>

## PTT#04: Spike Testing ⚡

**Category:** Limits &nbsp;|&nbsp; **Level:** Intermediate

### 🎯 What

A **spike test** is a type of stress test where the load **jumps suddenly** (in seconds, not minutes) to a very high level, stays there briefly, then **drops back**. It checks whether the system survives the burst and **recovers** afterwards.

```text
 Users
   │            ┃┃
   │            ┃┃          ┃┃
   │            ┃┃          ┃┃
   │            ┃┃          ┃┃
   │────────────┛┗──────────┛┗──────────
   └──────────────────────────────────────▶ Time
              spike 1     spike 2
```

### 💡 Why It Matters

- Real traffic is not smooth. A TV advert, a push notification, a flash sale, ticket release at 9:00 sharp or a viral post can multiply traffic in seconds.
- **Auto-scaling** takes minutes to react. Spike testing shows what users experience **before** new servers arrive.
- It exposes cold caches, connection storms, thundering-herd problems and queues that never drain.

### 🕒 When to Use It

- ✅ Systems with **scheduled bursts**: ticketing, exam results, sales launches, login at shift start.
- ✅ Systems that depend on **auto-scaling** or **rate limiting** and need to prove it works.
- ❌ Not needed for internal systems with smooth, predictable usage.

### 🛠️ In JMeter

- **Ultimate Thread Group** (plugin): add rows that start many threads with a near-zero ramp-up.
- **Open Model Thread Group** (built-in, JMeter 5.5+): describe arrival rates over time, for example:
  ```text
  rate(5/sec) random_arrivals(5 min) rate(100/sec) random_arrivals(1 min) rate(5/sec) random_arrivals(5 min)
  ```

> 💡 **Pro tip:** Run **more than one** spike. The second spike often behaves very differently from the first, because caches, pools and queues have not fully recovered.

---

<a id="ptt05"></a>

## PTT#05: Endurance / Soak Testing ⏳

**Category:** Stability &nbsp;|&nbsp; **Level:** Intermediate

### 🎯 What

An **endurance test**, also called a **soak test**, runs a **realistic, steady load for a long time**: typically **8 to 72 hours**, sometimes longer. The question is: **does the system stay healthy over time?**

```text
 Users
   │     ┌──────────────────────────────────────────────┐
   │    ╱              steady realistic load              ╲
   │───╱                 for hours or days                 ╲──
   └─────────────────────────────────────────────────────────▶ Time
 Resp. time  ─────────────────────────────────╱╱╱  ← slow creep = leak
```

### 💡 Why It Matters

Some problems only appear after hours of running, and short tests will **never** find them:

- 🧠 **Memory leaks** and growing heap, ending in `OutOfMemoryError`.
- 🔌 **Connection or file handle leaks**, ending in "too many open files".
- 🗑️ Long or frequent **garbage collection** pauses.
- 📜 Logs, temp files or tables that **grow** until the disk fills.
- ⏰ Scheduled jobs (backups, batch runs, cache refresh, token expiry) that clash with user traffic.

### 🕒 When to Use It

- ✅ Systems that must run **24/7** without restarts.
- ✅ After major changes to memory management, caching, connection pooling or the runtime (for example a JVM upgrade).
- ✅ Before go-live for long-running, business-critical services.
- ❌ Not as the first test. Pass the **load test** first, or you will spend 12 hours finding a problem a 30-minute test would have shown.

### 🛠️ In JMeter

- A **Thread Group** with **Specify Thread lifetime** (duration) set, typically at around **70 to 80%** of the expected peak.
- Results files get **large**. Save CSV only, with a minimal set of fields, and disable every non-essential listener.
- Make sure your **test data** lasts: set CSV Data Set Config to **recycle**, or provide enough unique data for the full duration.

> 💡 **Pro tip:** Plot **response time and memory against time**, not just averages. A flat line is healthy. A slow upward slope is a leak, even if every individual number is "within target".

> ⚠️ **Watch out:** Soak tests tie up an environment for a long time. Book it, tell the other teams, and make sure nobody deploys in the middle of your run.

---

<a id="ptt06"></a>

## PTT#06: Volume Testing 🗄️

**Category:** Data &nbsp;|&nbsp; **Level:** Intermediate

### 🎯 What

A **volume test** (sometimes called a **flood test**) checks how the system behaves when the **amount of data** is large, rather than the number of users. That data can be:

- A **database** with production-sized (or future-sized) tables.
- **Large files** to upload, import or process.
- **Large payloads**: big JSON responses, long reports, bulk API calls.
- **Batch jobs** processing millions of records.

```text
 Data size
   │                                   ████
   │                         ████      ████
   │               ████      ████      ████
   │     ████      ████      ████      ████
   └───── 10K ──── 1M ────── 10M ───── 100M ───▶ Records
          same user load, growing data volume
```

### 💡 Why It Matters

- A query that takes 5 ms on a test database with 1,000 rows can take **30 seconds** on 50 million rows. Many teams only find this in production, months after go-live, when the data has grown.
- It reveals **missing indexes**, full table scans, inefficient pagination, memory blow-ups when loading large results, and slow reports.
- It checks the system is ready for **future growth**, not just today's data.

### 🕒 When to Use It

- ✅ Data-heavy systems: reporting, search, analytics, ERP, banking, archives.
- ✅ Before a **data migration** or when onboarding a large new customer.
- ✅ When a **test environment** has far less data than production. (This is very common, and a major cause of "it was fine in test".)

### 🛠️ In JMeter

- JMeter generates the **requests**. The data itself is usually prepared with database scripts, data generators or masked copies of production.
- Use **CSV Data Set Config** (see [TOD#009](TOD.md#tod009)) to drive realistic search terms, IDs and file names across the whole data set, not the same 10 records.

> 💡 **Pro tip:** Ask for the **production data size today** and the **expected size in 1 to 3 years**. Test at the future size.

---

<a id="ptt07"></a>

## PTT#07: Capacity Testing 📦

**Category:** Planning &nbsp;|&nbsp; **Level:** Advanced

### 🎯 What

A **capacity test** finds the **maximum** number of users, transactions or throughput the system can handle **while still meeting its performance targets**. It answers **"how much headroom do we have?"**

The key difference from stress testing: capacity testing stops at the point where **targets are no longer met**. Stress testing keeps going until **something breaks**.

```text
 Response
 time (p95)                                       ╱ ✖ breaks (stress)
   │                                             ╱
   │ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─●  ← SLA limit = capacity
   │                                    ___╱
   │ ______________________________────
   └────────────────────────────────────────────────▶ Load (users / TPS)
```

### 💡 Why It Matters

- It turns performance into **business numbers**: "this setup supports 1,200 concurrent users at under 2 seconds".
- It drives **capacity planning** and **cost decisions**: when to add servers, how big the cloud instances should be, when growth will hit the limit.
- It tells marketing and management whether the next campaign is safe.

### 🕒 When to Use It

- ✅ Before **growth events**: new markets, new customers, migrations, mergers.
- ✅ When sizing **infrastructure** or a **cloud budget**.
- ✅ Periodically, to track how much headroom remains as the product evolves.

### 🛠️ In JMeter

- A **stepped** load profile (Concurrency Thread Group or Ultimate Thread Group), holding each step for several minutes.
- Track **p95 response time, throughput and error rate per step**. Capacity is the last step where all targets were still met.

> 💡 **Pro tip:** Watch **throughput** as you add load. When adding users no longer increases transactions per second, and response times start climbing, you have reached saturation.

---

<a id="ptt08"></a>

## PTT#08: Scalability Testing 📈

**Category:** Planning &nbsp;|&nbsp; **Level:** Advanced

### 🎯 What

A **scalability test** checks whether the system can **grow** to handle more load by **adding resources**, and how efficiently it does so.

- **Scale up (vertical):** bigger machines, more CPU and memory.
- **Scale out (horizontal):** more instances, nodes or pods behind a load balancer.

The test runs the same workload against different sizes and compares the results.

```text
 Max throughput (TPS) at target response time

 Nodes   Ideal (linear)   Good          Poor (shared bottleneck)
   1     ██ 100           ██ 100        ██ 100
   2     ████ 200         ███▋ 185      ██▌ 125
   4     ████████ 400     ███████ 350   ██▊ 140
   8     ████████████████ 800
                          █████████████ 660
                                        ███ 150   ← more hardware, no gain
```

### 💡 Why It Matters

- "We'll just add more servers" only works if the application **can actually use them**. Shared databases, locks, sticky sessions, caches and single-threaded components often stop scaling.
- It validates **auto-scaling** rules in the cloud: do new instances start fast enough, and do they actually take load?
- It shows the **cost per extra unit of capacity**, which drives architecture and budget decisions.

### 🕒 When to Use It

- ✅ Cloud or container platforms that rely on **horizontal scaling**.
- ✅ When planning for significant **business growth**.
- ✅ After **architecture changes** (microservices split, new caching layer, database sharding).

### 🛠️ In JMeter

- Run the same **capacity test** against each configuration (1, 2, 4 nodes ...) and compare the maximum throughput at target response time.
- For large loads, use **distributed testing** (several JMeter load generators) so the generators don't become the limit.

> 💡 **Pro tip:** Report scalability as a ratio. If doubling the nodes gives **1.8×** the throughput, that's good. If it gives **1.1×**, there is a shared bottleneck that more hardware will not fix.

---

<a id="ptt09"></a>

## PTT#09: Benchmark Testing 🏁

**Category:** Comparison &nbsp;|&nbsp; **Level:** Intermediate

### 🎯 What

A **benchmark test** measures performance using a **standard, repeatable workload** and **compares** the result with a reference: an industry standard, a competitor, another product or configuration, or an agreed target.

| Baseline                                    | Benchmark                                                    |
|---------------------------------------------|--------------------------------------------------------------|
| Your **own** starting point                 | A **comparison** against a standard, rival or alternative   |
| "Where are we?"                             | "How do we compare?"                                         |
| Compared with **your own future results**   | Compared with **something else**                             |

### 💡 Why It Matters

- It supports **technology choices**: database A vs database B, cloud instance type X vs Y, framework upgrade vs current version.
- It gives **objective proof** for claims ("30% faster than the old platform") and contract or SLA discussions.
- It catches **release-over-release regressions** when every release runs the same benchmark suite.

### 🕒 When to Use It

- ✅ Choosing between **vendors, products, instance types or configurations**.
- ✅ Comparing **releases** against a fixed, agreed workload.
- ✅ Checking against **industry or contractual standards**.

### 🛠️ In JMeter

- Keep **one** fixed test plan, data set and load profile. Change only the thing being compared.
- Parameterise hosts and load with properties (`${__P(host)}`, `-Jhost=...`) so the same plan runs against every option.

> ⚠️ **Watch out:** A benchmark is only fair if **everything else is equal**: same data size, same network, same warm-up, same JMeter settings. Change one variable at a time.

---

<a id="ptt10"></a>

## PTT#10: Other Types You Will Hear About 🧩

**Category:** Extended family &nbsp;|&nbsp; **Level:** Intermediate

| Type                              | What it is                                                                                     | When to use it                                                     |
|-----------------------------------|------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| 💨 **Smoke performance test**     | A short, low-load run (minutes, few users) to prove the script, data and environment work.     | Before **every** bigger test. Cheap insurance.                     |
| 🧱 **Breakpoint test**            | A stress test that increases load continuously until the system fails, to find the exact limit. | When you need the **absolute ceiling**, not just "beyond peak".    |
| 🔁 **Concurrency test**           | Many users hit the **same function or record at the same moment**.                             | Bookings, stock, payments: anything that can deadlock or double-sell. |
| ⚙️ **Configuration / tuning test** | Same workload, different settings (JVM heap, pool sizes, cache size) to find the best setup.  | Performance tuning, before go-live.                                |
| 🛟 **Failover / resilience test** | Kill a node, database or dependency **during** load, and watch the system cope and recover.    | High-availability systems, disaster recovery drills.               |
| 🔬 **Isolation test**             | Repeat a test against a single component or transaction to pin down a known problem.          | Diagnosing a bottleneck found in a bigger test.                    |
| 🌐 **Client-side / front-end performance** | Measures browser rendering and page load (Core Web Vitals). JMeter does **not** do this. | Use with Lighthouse, WebPageTest or browser tooling, alongside JMeter. |

> 📝 **Trainer's note:** JMeter works at the **protocol level** (HTTP, JDBC, JMS ...). It does not render pages or run browser JavaScript. Its response times are **server and network** time, not what the user sees on screen.

---

<a id="confused"></a>

## 🤔 Commonly Confused Pairs

| Pair                          | The difference in one line                                                                                  |
|-------------------------------|-------------------------------------------------------------------------------------------------------------|
| **Load** vs **Stress**        | Load stays **at** the expected peak. Stress goes **beyond** it, until something breaks.                     |
| **Stress** vs **Spike**       | Stress climbs **gradually**. Spike jumps **suddenly**, then drops back.                                     |
| **Stress** vs **Capacity**    | Capacity stops when **targets are missed**. Stress continues until the **system fails**.                    |
| **Load** vs **Soak**          | Same kind of load. Load runs for **an hour or so**, soak runs for **many hours or days**.                   |
| **Load** vs **Volume**        | Load increases **users or requests**. Volume increases **data**.                                            |
| **Capacity** vs **Scalability** | Capacity: **how much** can this setup handle? Scalability: **how does that change** when we add resources? |
| **Baseline** vs **Benchmark** | Baseline: your **own** reference point. Benchmark: a comparison against **something else**.                 |

---

<a id="choosing"></a>

## 🧭 Choosing the Right Type

### 💸 Why Choosing Matters

Performance tests are **expensive**:

- 🖥️ **Environments** that are production-like in size, data and configuration.
- 🧑‍🤝‍🧑 **People**: testers, developers, DBAs and ops watching servers during the run.
- ⏱️ **Time**: scripting, test data, the run itself (a soak test can take days), and analysis.
- 💳 **Money**: cloud load generators, licences, monitoring tools, third-party sandbox fees.

Running every type "just in case" is rarely affordable. Pick the types that answer the **risks** your system actually has.

### ❓ Start From the Question

| If the question is ...                                              | Run a ...                     |
|---------------------------------------------------------------------|-------------------------------|
| "Is the script and environment working?"                            | 💨 Smoke                       |
| "What does normal look like, so we can compare later?"              | 📏 Baseline                    |
| "Will we meet our targets on launch day / at peak hour?"            | 🏋️ Load                        |
| "What happens if traffic is double what we planned?"                | 🔥 Stress                      |
| "We send a push notification to 2 million users at 9:00. Will we survive?" | ⚡ Spike                |
| "Will it still be healthy after a week without restarting?"         | ⏳ Soak                        |
| "Will it cope when the database is 10× bigger?"                     | 🗄️ Volume                      |
| "How many more customers can we take before we need new servers?"   | 📦 Capacity                    |
| "If we add servers, do we actually get more capacity?"              | 📈 Scalability                 |
| "Is option A faster than option B? Is this release slower than the last one?" | 🏁 Benchmark         |

### 🎯 Start From the Risk

| System characteristic                                  | Prioritise                    |
|--------------------------------------------------------|-------------------------------|
| Public launch or marketing campaign                    | Load, Spike, Stress           |
| Runs 24/7, rarely restarted                            | Soak                          |
| Large or fast-growing data                             | Volume, Capacity              |
| Cloud / auto-scaling / microservices                   | Scalability, Spike            |
| Money, stock or booking transactions                   | Load, Concurrency, Stress     |
| Choosing a technology or vendor                        | Benchmark                     |
| Frequent releases with CI/CD                           | Baseline (automated), Smoke   |

### 🪜 A Sensible Order

Each step builds on the one before. Don't skip ahead: a failure early on makes later tests pointless and expensive.

```text
 1. 💨 Smoke      → does the script work?
 2. 📏 Baseline   → what is normal?
 3. 🏋️ Load       → do we meet targets at expected peak?        ← most projects need at least 1 to 3
 4. 🔥 Stress / ⚡ Spike → how do we fail and recover?
 5. ⏳ Soak       → are we stable over time?
 6. 📦 Capacity / 📈 Scalability / 🗄️ Volume → how far can we grow?
 🏁 Benchmark     → whenever a comparison is needed
```

### 💰 Getting More From Fewer Runs

- 🧩 **Combine where it makes sense.** A stepped load profile can give you **load**, **capacity** and the start of **stress** results in one run, if you hold each step long enough and monitor well.
- 🔁 **Re-use one test plan.** Build one well-parameterised JMeter plan and change the profile with properties (`-Jthreads`, `-Jrampup`, `-Jduration`) instead of maintaining a plan per type.
- 🎯 **Test the critical journeys first.** The 20% of transactions that carry 80% of traffic or business value deserve the effort. Not every screen needs a load test.
- 🤖 **Automate small, run big rarely.** A short baseline in CI on every build is cheap. Save the long soak and big stress runs for release milestones.
- 📊 **Monitor everything during each run.** A run without server-side metrics often has to be repeated.

> 💡 **Pro tip:** Write the **test type, the question, the load profile and the pass/fail criteria** in your test plan's comments or a README before you run anything. If you can't fill in "the question", you're not ready to run the test.

> ⚠️ **Watch out:** Test types describe the **load shape and goal**, not the tool. The same JMeter script can be a load test, a stress test or a soak test, depending only on **how many users, how fast, and for how long**.

---

<a id="glossary"></a>

## 📖 Key Terms Glossary

> 📖 The short list below covers the words used in this document. For the full A to Z with JMeter mapping, see the [Performance Testing Glossary](Performance-Glossary.md).

| Term                         | Meaning                                                                                                   |
|------------------------------|-----------------------------------------------------------------------------------------------------------|
| **Workload / load profile**  | The mix of transactions, number of users, arrival rate and duration used in a test.                       |
| **Concurrent users**         | Users active in the system at the same time (logged in, mid-journey), not necessarily all clicking at once. |
| **Throughput**               | Work done per unit of time, for example requests per second (RPS) or transactions per second (TPS).       |
| **Response time**            | Time from sending a request to receiving the full response.                                               |
| **Percentile (p90, p95, p99)** | p95 = 95% of requests were faster than this value. More honest than the average.                       |
| **Think time**               | The pause a real user takes between actions. Added in JMeter with timers.                                 |
| **Ramp-up**                  | The period over which load is gradually increased to the target level.                                    |
| **Steady state**             | The period where load is held constant. Measure here.                                                     |
| **Saturation / knee point**  | The load at which a resource is fully used and response times start climbing sharply.                     |
| **Bottleneck**               | The component that limits overall performance (CPU, DB, pool, network, a slow dependency).                |
| **SLA / SLO / NFR**          | Agreed performance targets: contractual (SLA), internal objective (SLO), or written requirement (NFR).    |
| **Closed vs open model**     | Closed: a fixed number of users loop (classic Thread Group). Open: new users arrive at a rate, regardless of how slow the system is (Open Model Thread Group). |

---

<!--
Template for new types (copy, then update the Index table):

<a id="pttNN"></a>

## PTT#NN: Type Name Emoji

**Category:** ... &nbsp;|&nbsp; **Level:** Beginner / Intermediate / Advanced

### 🎯 What
(diagram of the load shape)
### 💡 Why It Matters
### 🕒 When to Use It
### 🛠️ In JMeter
> 💡 **Pro tip:** ...
> ⚠️ **Watch out:** ...

---
-->
