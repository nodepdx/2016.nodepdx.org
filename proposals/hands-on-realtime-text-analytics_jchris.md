Hands On Realtime Text Analytics
========================

* Speaker   : J Chris Anderson
* Available : Thursday
* Length    : 30 min

Description
-----------

A common problem in large scale computing, is coordinating workers when they can be scattered across compute nodes. For workloads like this, atomic operators like increment and decrement reduce contention between distributed processes.

In this talk I'll show a full text analysis tool which ranks words in the Twitter firehose. By storing each token in a key based on its characteristics, we can provide word rankings both globally, as well as over time and space.

We'll show the running application, and take a tour through the code, as well as discuss cluster sizing and how it is impacted by variations in the input data stream.

For instance a tweet in English from San Francisco might say "Go Giants" so counters for `2012:go` and `usa-sf:2012-07:giants` (among a few dozen others) are incremented. Even using memory like this, the counts from a full corpus of English text would only take a few gigabytes to hold, making this architecture more efficient than a traditional index-and-rollup approach.


Speaker Bio
-----------

Chris Anderson is a co-founder of Couchbase and Chief Architect of the company's mobile technology. Chris has a personal obsession with bending the physics of the web and giving control back to users. Chris is co-author of "CouchDB: The Definitive Guide" (O'Reilly) and has spoken at a number of conferences including: SXSW, OSCON, LXJS, ApacheCon and the Erlang Factory.

Links
-----
* Github: http://github.com/jchris
* Twitter: @jchris
