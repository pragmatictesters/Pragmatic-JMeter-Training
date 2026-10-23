# 💡 JMeter Tip of the Day (TOD)

> Small, practical tips to help JMeter trainees work faster and smarter.
> Verified against **Apache JMeter 5.6.3**.

---

## 📚 Index

| #       | Tip                                                                 | Category     |
|---------|---------------------------------------------------------------------|--------------|
| TOD#001 | [JMeter Keyboard Shortcuts: Speed Up Your Test Plan ⚡](#tod001) | Productivity |
| TOD#002 | [Undo and Redo in JMeter ↩️](#tod002)        | Configuration |
| TOD#003 | [Keep jmeter.properties Clean, Use user.properties 🔧](#tod003)   | Configuration |
| TOD#004 | [JMeter Plugins Management 🔌](#tod004)                           | Setup |
| TOD#005 | [JMeter Backup Files 💾](#tod005)                                 | Configuration |
| TOD#006 | [Run Load Tests in CLI (Non-GUI) Mode 🚀](#tod006)                | Performance |
| TOD#007 | [Use Lightweight Listeners and Components for Real Load Tests 🪶](#tod007) | Performance |
| TOD#008 | [Generate Realistic Test Data With Datafaker 🎲](#tod008)        | Test Data |
| TOD#009 | [Prefer CSV Data Set Config Over Generating Data at Runtime 📄](#tod009) | Performance |
| TOD#010 | [Save Results as CSV, Use XML Only for Debugging 📊](#tod010)      | Performance |

---

<a id="tod001"></a>

## TOD#001: JMeter Keyboard Shortcuts: Speed Up Your Test Plan ⚡

**Category:** Productivity &nbsp;|&nbsp; **Level:** Beginner

### 🎯 The Hack

Add JMeter components instantly with keyboard shortcuts instead of right-clicking through menus.
Select a node in the test plan tree and press **`Ctrl` + `0`** to **`Ctrl` + `9`** (**`Cmd` + `0`** to **`Cmd` + `9`** on macOS). The component is added as a child of the selected node.

### ⌨️ Default Quick Keys

| Shortcut   | Component                        | Use Case                       |
|:----------:|----------------------------------|--------------------------------|
| `Ctrl + 0` | Thread Group                     | Start of every test plan       |
| `Ctrl + 1` | HTTP Request (sampler)           | Make HTTP requests             |
| `Ctrl + 2` | Regular Expression Extractor     | Extract dynamic values         |
| `Ctrl + 3` | Response Assertion               | Validate responses             |
| `Ctrl + 4` | Constant Timer                   | Add delays (think time)        |
| `Ctrl + 5` | Flow Control Action              | Pause or stop threads / test   |
| `Ctrl + 6` | JSR223 PostProcessor             | Post-execution logic           |
| `Ctrl + 7` | JSR223 PreProcessor              | Pre-execution setup            |
| `Ctrl + 8` | Debug Sampler                    | Inspect variables              |
| `Ctrl + 9` | View Results Tree                | Visualize responses            |

### 🔧 Make It Your Own

The keys are defined by the `gui.quick_0` to `gui.quick_9` properties in `bin/jmeter.properties`:

```properties
gui.quick_0=ThreadGroupGui
gui.quick_1=HttpTestSampleGui
gui.quick_2=RegexExtractorGui
gui.quick_3=AssertionGui
gui.quick_4=ConstantTimerGui
gui.quick_5=TestActionGui
gui.quick_6=JSR223PostProcessor
gui.quick_7=JSR223PreProcessor
gui.quick_8=DebugSampler
gui.quick_9=ViewResultsFullVisualizer
```

To remap a key, override it in **`bin/user.properties`** and restart JMeter. For example, to put the JSON Extractor on `Ctrl + 2`:

```properties
gui.quick_2=JSONPostProcessorGui
```

> 💡 **Pro tip:** Override settings in `user.properties` rather than editing `jmeter.properties`. Your changes then survive JMeter upgrades.

> 📝 **Trainer's note:** Key 5 adds the **Flow Control Action**, which was called *Test Action* in older JMeter versions. Key 3 adds a **Response Assertion**.

---

<a id="tod002"></a>

## TOD#002: Undo and Redo in JMeter ↩️

**Category:** Configuration &nbsp;|&nbsp; **Level:** Beginner

### 🎯 What

Enable undo/redo in the JMeter GUI. It is **disabled by default**.

### 🛠️ How

1. Open **`bin/user.properties`** (recommended) or `bin/jmeter.properties`.
2. Add the line below. In `jmeter.properties` you will find it commented out as `#undo.history.size=0`; uncomment it and change the value.
   ```properties
   undo.history.size=25
   ```
3. Save the file.
4. Restart JMeter.

You can now use **Edit ▸ Undo / Redo**, or the shortcuts:

| Action | Windows / Linux      | macOS               |
|--------|----------------------|---------------------|
| Undo   | `Ctrl + Z`           | `Cmd + Z`           |
| Redo   | `Ctrl + Shift + Z`   | `Cmd + Shift + Z`   |

### ⚠️ Why Is It Disabled by Default?

- 🐞 **Known, unfixed bugs:** the JMeter team ships it off because of open bug reports ([57039](https://bz.apache.org/bugzilla/show_bug.cgi?id=57039), [57040](https://bz.apache.org/bugzilla/show_bug.cgi?id=57040), [57043](https://bz.apache.org/bugzilla/show_bug.cgi?id=57043)).
- 🧠 **Extra memory:** every history step keeps a copy of the test plan. The bigger the number, the more memory it uses.
- 🐢 **Slower GUI** on large test plans, for the same reason.

> 💡 **Pro tip:** `25` is the value JMeter's own comments suggest. Keep it modest, and still **save often** (`Ctrl + S`), because undo is not a replacement for saving.

---

<a id="tod003"></a>

## TOD#003: Keep jmeter.properties Clean, Use user.properties 🔧

**Category:** Configuration &nbsp;|&nbsp; **Level:** Beginner

### 🎯 Problem

Editing `bin/jmeter.properties` directly means your changes are lost (or hard to find) when you upgrade JMeter, and you can no longer tell which settings are defaults and which are yours.

### ✅ Solution

Put **your** settings in a separate properties file and leave `jmeter.properties` untouched.

| File / Option                  | What it is for                                             |
|--------------------------------|------------------------------------------------------------|
| `bin/user.properties`          | Your JMeter property overrides. Loaded automatically.      |
| `bin/system.properties`        | Java system properties (for example SSL or proxy settings). Loaded automatically. |
| `-q my.properties`             | Extra properties file per run (for example per environment). |
| `-Jname=value`                 | One-off override on the command line.                      |

### 🛠️ How

1. Open `bin/user.properties` (it already exists and is almost empty).
2. Add only the properties you want to change, for example:
   ```properties
   undo.history.size=25
   jmeter.gui.action.save.keep_backup_max_count=20
   ```
3. Save and restart JMeter.

> 💡 **Pro tip:** Properties are loaded in this order, and a later value wins: `jmeter.properties` ▸ `user.properties` ▸ `-q` files ▸ `-J` options. Keep one `-q` file per environment (for example `qa.properties`, `staging.properties`) to switch hosts and loads without touching the test plan.

> 📝 **Trainer's note:** On upgrade, just copy your `user.properties` into the new JMeter's `bin` folder and you are done.

---

<a id="tod004"></a>

## TOD#004: JMeter Plugins Management 🔌

**Category:** Setup &nbsp;|&nbsp; **Level:** Beginner

### 🎯 What

The **Plugins Manager** lets you install, uninstall and upgrade plugins from inside JMeter. Most plugins are hosted at **[jmeter-plugins.org](https://jmeter-plugins.org)**.

### 🛠️ Normal Way

1. If **Options ▸ Plugins Manager** is missing, download `jmeter-plugins-manager-x.y.jar` from [jmeter-plugins.org/install](https://jmeter-plugins.org/install/Install/), put it in `lib/ext`, and restart JMeter.
2. Open **Options ▸ Plugins Manager**.
3. Use the **Available Plugins** tab to search and tick plugins, then click **Apply Changes and Restart JMeter** ✅

### 🔓 Behind a Proxy? No Problem!

The Plugins Manager uses JMeter's own proxy settings, so start JMeter with them:

```bash
# Windows: jmeter.bat ... | macOS/Linux:
./jmeter -H proxy.mycompany.com -P 8080 -u myUser -a myPassword
```

Or set them as Java system properties (in `bin/system.properties` or `JVM_ARGS`):

```properties
https.proxyHost=proxy.mycompany.com
https.proxyPort=8080
http.proxyHost=proxy.mycompany.com
http.proxyPort=8080
```

### 🤖 Bonus: Install From the Command Line

Handy for CI servers and Docker images:

```bash
# One-time: create the PluginsManagerCMD script in bin/
java -cp lib/ext/jmeter-plugins-manager-<version>.jar org.jmeterplugins.repository.PluginManagerCMDInstaller

# Then install plugins by id
./bin/PluginsManagerCMD.sh install jpgc-casutg,jpgc-graphs-basic
```

> ⚠️ **Watch out:** No internet at all? Download the plugin's zip from jmeter-plugins.org and extract it into the JMeter home folder (jars go to `lib` and `lib/ext`), then restart.

> 💡 **Pro tip:** Keep a list of the plugins your test plans need. Test plans that use a plugin will not open on a machine without it.

---

<a id="tod005"></a>

## TOD#005: JMeter Backup Files 💾

**Category:** Configuration &nbsp;|&nbsp; **Level:** Beginner

### 🎯 What

Every time you **save** a test plan in the GUI, JMeter first copies the current `.jmx` to a backup folder. Saving `test-plan.jmx` creates `test-plan-000001.jmx`, `test-plan-000002.jmx`, and so on.

> ✅ **Good news:** this is **on by default**. Most trainees just don't know where to look.

### 🤔 Why Use It

- Recover from accidental changes
- Prevent data loss
- Safety net for large projects

### 📂 Where Are My Backups?

By default in **`<JMETER_HOME>/backups`**, keeping the **last 10** backups per test plan.

### 🛠️ How to Configure

Add any of these to `bin/user.properties`, then restart JMeter:

| Property                                         | Default                | Meaning                                   |
|--------------------------------------------------|------------------------|-------------------------------------------|
| `jmeter.gui.action.save.backup_on_save`          | `true`                 | Turn backups on or off                    |
| `jmeter.gui.action.save.backup_directory`        | `<JMETER_HOME>/backups`| Where backups are written                 |
| `jmeter.gui.action.save.keep_backup_max_count`   | `10`                   | How many backups to keep (`0` = no limit) |
| `jmeter.gui.action.save.keep_backup_max_hours`   | `0` (keep forever)     | Delete backups older than N hours         |

Example:

```properties
jmeter.gui.action.save.backup_directory=/Users/me/jmeter-backups
jmeter.gui.action.save.keep_backup_max_count=30
```

> 💡 **Pro tip:** Backups are a safety net, not version control. Keep your test plans in **Git** as well.

---

<a id="tod006"></a>

## TOD#006: Run Load Tests in CLI (Non-GUI) Mode 🚀

**Category:** Performance &nbsp;|&nbsp; **Level:** Beginner

### 🎯 The Hack

Use the GUI to **build and debug** test plans. Use the **command line** to **run** load tests. The GUI uses a lot of CPU and memory to draw results, which takes resources away from generating load and skews your numbers. JMeter even warns you on startup: *"Don't use GUI mode for load testing!"*

### 🛠️ How

```bash
jmeter -n -t test-plans/my-test.jmx -l test-results/results.jtl -e -o test-reports/html
```

| Option | Meaning                                                     |
|--------|-------------------------------------------------------------|
| `-n`   | Non-GUI (CLI) mode                                          |
| `-t`   | Test plan (`.jmx`) to run                                   |
| `-l`   | Results file (`.jtl`) to write                              |
| `-e`   | Generate the HTML dashboard report at the end               |
| `-o`   | Report output folder (must be empty or not exist)           |
| `-f`   | Delete existing results file and report folder before starting |
| `-J`   | Set a JMeter property, for example `-Jthreads=50`           |
| `-q`   | Load an extra properties file                               |
| `-j`   | JMeter log file name                                        |

Generate a report later from an existing results file:

```bash
jmeter -g test-results/results.jtl -o test-reports/html
```

### 📈 Give JMeter Enough Memory

JMeter 5.6 starts with a 1 GB heap. For bigger tests, raise it with the `HEAP` environment variable:

```bash
# macOS/Linux
HEAP="-Xms1g -Xmx4g" jmeter -n -t my-test.jmx -l results.jtl
# Windows
set HEAP=-Xms1g -Xmx4g
```

> 💡 **Pro tip:** Make thread count, ramp-up and duration properties in your plan (`${__P(threads,10)}`), then change them per run with `-Jthreads=100` without opening the GUI.

> ✅ **Live progress:** In CLI mode JMeter prints a `summary +` line every 30 seconds with throughput, response times and errors.

---

<a id="tod007"></a>

## TOD#007: Use Lightweight Listeners and Components for Real Load Tests 🪶

**Category:** Performance &nbsp;|&nbsp; **Level:** Intermediate

### 🎯 The Hack

Some JMeter elements are great while debugging but expensive during a real load test. They eat CPU and memory on the load generator, which limits the load you can produce and distorts the results. Swap them for lighter options before the real run.

### 🔄 Swap This for That

| Avoid in load runs ❌                                    | Use instead ✅                                                        | Why |
|---------------------------------------------------------|----------------------------------------------------------------------|-----|
| View Results Tree, View Results in Table                | Disable them; write results with `-l results.jtl`                    | They keep every sample (and response) in memory |
| Graph listeners (Aggregate Graph, Response Time Graph…) | HTML dashboard report (`-e -o`) after the run                        | Drawing graphs during the test costs CPU |
| Watching results live in the GUI                        | **Backend Listener** (InfluxDB + Grafana) or the CLI `summary` lines | Live monitoring without the overhead |
| XML result files, saving response data                  | CSV results (the default), `jmeter.save.saveservice.response_data=false` (the default) | Smaller files, less disk I/O |
| BeanShell elements                                      | **JSR223 + Groovy** with *Cache compiled script* ticked              | Groovy is compiled and much faster |
| XPath Extractor / XPath Assertion on big pages          | Boundary, Regex, JSON or CSS Selector Extractor; Response Assertion  | XPath builds a full document tree for each response |
| Debug Sampler, Debug PostProcessor                      | Disable or remove after debugging                                     | Adds samples and noise to results |
| Many heavy assertions on every request                  | Assert what matters (status code, a key text) on key requests        | Every assertion runs for every sample |

### 🛠️ Quick Checklist Before a Load Run

1. Disable all listeners (select them and press `Ctrl + T` to toggle).
2. Remove or disable Debug Samplers.
3. Check JSR223 elements use Groovy with caching on.
4. Run in CLI mode with `-l` and `-e -o` (see [TOD#006](#tod006)).

> 💡 **Pro tip:** Keep two habits: **GUI + listeners** for building and debugging with 1 to 5 threads, **CLI + no listeners** for the real test.

> ⚠️ **Watch out:** In CLI mode, listeners that are still enabled in the test plan **still run** and still cost resources. Disable them, don't just ignore them.

---

<a id="tod008"></a>

## TOD#008: Generate Realistic Test Data With Datafaker 🎲

**Category:** Test Data &nbsp;|&nbsp; **Level:** Intermediate

### 🎯 The Hack

Need realistic names, emails, addresses or phone numbers? Instead of hand-made data, use the free Java library **[Datafaker](https://www.datafaker.net)** from a JSR223 element. It can generate data in many locales and categories (people, addresses, finance, internet and more).

### 🛠️ How

1. Download the Datafaker jar and its dependencies from [Maven Central](https://central.sonatype.com/artifact/net.datafaker/datafaker) (`net.datafaker:datafaker`).
   - Datafaker **2.x needs Java 17+**. On Java 8 or 11, use the latest **1.x** version.
2. Copy the jars into JMeter's **`lib`** folder and restart JMeter.
3. Add a **JSR223 PreProcessor** (language **groovy**) to the request that needs data:

```groovy
import net.datafaker.Faker

// Create one Faker per thread and reuse it (creating it is expensive)
def faker = vars.getObject('faker')
if (faker == null) {
    faker = new Faker()
    vars.putObject('faker', faker)
}

vars.put('firstName', faker.name().firstName())
vars.put('lastName',  faker.name().lastName())
vars.put('phone',     faker.phoneNumber().cellPhone())
// Random is not unique: add a UUID to guarantee uniqueness
vars.put('email',     faker.internet().username() + '-' + UUID.randomUUID() + '@example.com')
```

4. Use `${firstName}`, `${email}` and so on in your samplers.

### ⚠️ Watch Out

- **Random ≠ unique.** Two threads can get the same name. If the system needs unique values (usernames, emails), combine fake data with `${__UUID()}`, `${__counter(FALSE,)}` or `${__threadNum}`.
- Generating data costs CPU on every iteration. For big load tests, prefer generating data **before** the test (see [TOD#009](#tod009)).
- Tick **Cache compiled script if available** in the JSR223 element.

> 💡 **Pro tip:** For simple cases you don't need a library at all. JMeter has built-in functions such as `${__RandomString(8,abcdefgh)}`, `${__Random(1,100)}`, `${__RandomDate(,,,,)}` and `${__UUID()}`.

---

<a id="tod009"></a>

## TOD#009: Prefer CSV Data Set Config Over Generating Data at Runtime 📄

**Category:** Performance &nbsp;|&nbsp; **Level:** Beginner

### 🎯 The Hack

Generating data while the test runs (scripts, random functions, libraries) uses CPU on the load generator for every request. Prepare the data **before** the test and read it with a **CSV Data Set Config**. JMeter reads the file one line at a time, which costs almost nothing, and you know exactly which data was used.

### 🛠️ How

1. Create a CSV file in `test-data/`, for example `users.csv`:
   ```csv
   username,password,email
   user001,Pass@123,user001@example.com
   user002,Pass@123,user002@example.com
   ```
2. Add **Config Element ▸ CSV Data Set Config** to the Thread Group.
3. Configure it:

| Field                     | Suggested value                | Notes                                              |
|---------------------------|--------------------------------|----------------------------------------------------|
| Filename                  | `test-data/users.csv`          | Relative paths are resolved from the `.jmx` folder |
| Variable Names            | *(empty)*                      | Empty = use the CSV header line as variable names  |
| Ignore first line         | `False`                        | Set `True` only if you typed Variable Names        |
| Recycle on EOF?           | `False` for unique data        | `True` starts again from the top                   |
| Stop thread on EOF?       | `True` for unique data         | Stops when the data runs out instead of reusing it |
| Sharing mode              | `All threads`                  | Each line is handed out once across all threads    |

4. Use `${username}`, `${password}` and `${email}` in your samplers.

### ⚠️ Watch Out

- Each thread reads **one line per iteration**. Make sure you have enough rows: threads × iterations.
- In **distributed** testing, every load generator reads its own copy of the file. Give each machine a different file if values must be unique.
- Avoid `${__CSVRead()}` and JSR223 file reading for this. CSV Data Set Config is the simplest and fastest option.

> 💡 **Pro tip:** Generate large data files once with a script (for example with Datafaker from [TOD#008](#tod008)) and reuse them across runs.

---

<a id="tod010"></a>

## TOD#010: Save Results as CSV, Use XML Only for Debugging 📊

**Category:** Performance &nbsp;|&nbsp; **Level:** Beginner

### 🎯 The Hack

JMeter can write results (`.jtl` files) as **CSV** or **XML**. CSV is the default and it is **much smaller and faster** to write. XML can also store response bodies and headers, which is useful when debugging but heavy during a load test.

| Format | Size & speed      | Can store response data? | Use for                          |
|--------|-------------------|--------------------------|----------------------------------|
| CSV ✅ | Small, fast       | No                       | Load tests, HTML dashboard report |
| XML    | Large, slower     | Yes                      | Debugging a few samples          |

### 🛠️ How

**Per listener:** In any listener that writes to a file (for example Simple Data Writer), click **Configure** and make sure **Save As XML** is **unticked**. Only tick the fields you need.

**Globally** (in `bin/user.properties`):

```properties
# csv is the default; set it explicitly so nobody changes it by accident
jmeter.save.saveservice.output_format=csv
```

**One debug run in XML**, without changing any file:

```bash
jmeter -n -t my-test.jmx -l debug.xml -Jjmeter.save.saveservice.output_format=xml -Jjmeter.save.saveservice.response_data.on_error=true
```

> 💡 **Pro tip:** `jmeter.save.saveservice.response_data.on_error=true` saves the response body **only for failed samples** (XML only). You get the debugging details you need without storing every response.

> ⚠️ **Watch out:** The HTML dashboard report (`-e -o` or `-g`) needs **CSV** results. Keep the default fields, and don't turn off the timestamp, elapsed, label, response code or success columns.

---

<!--
Template for new tips (copy, then update the Index table):

<a id="tod00N"></a>

## TOD#00N: Title Emoji

**Category:** ... &nbsp;|&nbsp; **Level:** Beginner / Intermediate / Advanced

### 🎯 What / The Hack
### 🛠️ How
### ⚠️ Watch Out
> 💡 **Pro tip:** ...

---
-->
