---
id: cheat-sheet
title: JMeter Cheat Sheet
sidebar_label: 📋 Cheat Sheet
sidebar_position: 5
description: Command-line options, keyboard shortcuts and the properties you change most, on one page.
---

The commands, shortcuts and settings you reach for most, on one page. Checked against **JMeter 5.6.3**.

## 🚀 Run from the command line {#cli}

Run real load tests in CLI (non-GUI) mode. The GUI is for building and debugging. See [TOD#006](./tips.md#tod006).

```bash
# Run a test, save results, build the HTML report
jmeter -n -t test-plans/my-test.jmx -l test-results/results.jtl -e -o test-reports/html

# Same, but overwrite old results and report
jmeter -n -t my-test.jmx -l results.jtl -f -e -o report

# Build the HTML report from an existing results file
jmeter -g results.jtl -o report

# Pass values into the plan, read them with ${__P(users,10)}
jmeter -n -t my-test.jmx -Jusers=50 -Jrampup=60 -l results.jtl

# Give JMeter more memory (macOS / Linux)
HEAP="-Xms1g -Xmx4g" jmeter -n -t my-test.jmx -l results.jtl
```

On Windows use `jmeter.bat`, and set memory with `set HEAP=-Xms1g -Xmx4g` first.

### Options you'll actually use {#cli-options}

| Option | What it does |
|--------|--------------|
| `-n` | Run in CLI (non-GUI) mode. |
| `-t <file.jmx>` | The test plan to run. |
| `-l <file.jtl>` | File to write sample results to. |
| `-j <file.log>` | File for the JMeter run log (default `jmeter.log`). |
| `-e` | Generate the HTML report at the end of the test. |
| `-o <folder>` | Output folder for the HTML report. Must be empty or missing. |
| `-g <file.jtl>` | Only generate the HTML report from an existing results file. |
| `-f` | Delete existing results file and report folder before starting. |
| `-J<name>=<value>` | Set a JMeter property. Read it with [`${__P(name,default)}`](./reference/functions.md#__P). |
| `-G<name>=<value>` | Set a property on remote servers too (distributed tests). |
| `-D<name>=<value>` | Set a Java system property. |
| `-q <file>` | Load an extra properties file, for example `-q env/staging.properties`. |
| `-L<category>=<level>` | Change log level, for example `-Ljmeter.util=DEBUG`. |
| `-H <host>` `-P <port>` | Send JMeter's traffic through a proxy. |
| `-r` / `-R <hosts>` | Start remote servers from `remote_hosts`, or from the given list. |
| `-X` | Stop remote servers at the end of the test. |
| `-v` | Print the JMeter version. |

Run `jmeter -?` for the full list.

## ⌨️ Keyboard shortcuts {#shortcuts}

Use `Cmd` instead of `Ctrl` on macOS.

| Shortcut | Action |
|----------|--------|
| `Ctrl + R` | Start the test |
| `Ctrl + Shift + N` | Start, ignoring timers (no pauses) |
| `Ctrl + .` | Stop (kills threads now) |
| `Ctrl + ,` | Shutdown (lets threads finish their current sample) |
| `Ctrl + E` | Clear all results |
| `Ctrl + Shift + E` | Clear results of the selected element |
| `Ctrl + S` / `Ctrl + Shift + S` | Save / Save as |
| `Ctrl + O` | Open a test plan |
| `Ctrl + T` | Enable or disable the selected element |
| `Ctrl + Shift + C` | Duplicate the selected element |
| `Ctrl + C` / `X` / `V` | Copy / cut / paste elements |
| `Delete` | Remove the selected element |
| `Ctrl + F` | Search the test plan tree |
| `Ctrl + Shift + F1` | Open the Function Helper |
| `Ctrl + -` / `Ctrl + Shift + -` | Collapse all / expand all |
| `Ctrl + 0` … `Ctrl + 9` | Add a common component (see [TOD#001](./tips.md#tod001)) |
| `Ctrl + Z` / `Ctrl + Shift + Z` | Undo / redo, once enabled (see [TOD#002](./tips.md#tod002)) |

## 🔧 Properties you change most {#properties}

Put these in `bin/user.properties` or pass them with `-J`. Never edit `jmeter.properties` ([TOD#003](./tips.md#tod003)).

| Property | Default | Why change it |
|----------|---------|---------------|
| [`jmeter.save.saveservice.output_format`](./reference/properties.md#jmeter.save.saveservice.output_format) | `csv` | Keep `csv`. XML results are big and slow ([TOD#010](./tips.md#tod010)). |
| [`jmeter.save.saveservice.response_data.on_error`](./reference/properties.md#jmeter.save.saveservice.response_data.on_error) | `false` | Set `true` to save response bodies only for failed samples (XML only). |
| [`summariser.interval`](./reference/properties.md#summariser.interval) | `30` | Seconds between progress lines in the console during CLI runs. |
| [`sample_variables`](./reference/properties.md#sample_variables) | _none_ | Save JMeter variables as extra columns in the results file. |
| [`jmeter.reportgenerator.overall_granularity`](./reference/properties.md#jmeter.reportgenerator.overall_granularity) | `60000` | Graph granularity in the HTML report, in ms. Lower it for short tests. |
| [`jmeter.reportgenerator.apdex_satisfied_threshold`](./reference/properties.md#jmeter.reportgenerator.apdex_satisfied_threshold) | `500` | Apdex "satisfied" threshold in ms for the HTML report. |
| [`httpclient4.retrycount`](./reference/properties.md#httpclient4.retrycount) | `0` | Retries on failed connections. Keep `0` so failures show up honestly. |
| [`undo.history.size`](./reference/properties.md#undo.history.size) | `0` | Set above `0` to turn on undo and redo in the GUI. |
| [`jmeter.gui.action.save.backup_on_save`](./reference/properties.md#jmeter.gui.action.save.backup_on_save) | `true` | Backup copies of your plan on every save ([TOD#005](./tips.md#tod005)). |
| [`remote_hosts`](./reference/properties.md#remote_hosts) | `127.0.0.1` | Load generators to use with `-r` in distributed tests. |

Browse all of them in the [Properties Reference](./reference/properties.md).

## 🧮 Functions you use every day {#functions}

| Function | Example | Use it for |
|----------|---------|------------|
| [`__P`](./reference/functions.md#__P) | `${__P(users,10)}` | Read a `-J` property with a default. |
| [`__Random`](./reference/functions.md#__Random) | `${__Random(1,100)}` | A random number in a range. |
| [`__RandomString`](./reference/functions.md#__RandomString) | `${__RandomString(8,abcdef123)}` | A random string from given characters. |
| [`__UUID`](./reference/functions.md#__UUID) | `${__UUID()}` | A unique ID per call. |
| [`__time`](./reference/functions.md#__time) | `${__time(yyyy-MM-dd)}` | Current time or date in any format. |
| [`__threadNum`](./reference/functions.md#__threadNum) | `${__threadNum}` | The current thread (user) number. |
| [`__counter`](./reference/functions.md#__counter) | `${__counter(TRUE,)}` | A counter per user (`TRUE`) or shared (`FALSE`). |
| [`__groovy`](./reference/functions.md#__groovy) | `${__groovy(vars.get("id").toUpperCase())}` | Small inline Groovy expressions. |

See all of them in [Functions and Variables](./reference/functions.md).
