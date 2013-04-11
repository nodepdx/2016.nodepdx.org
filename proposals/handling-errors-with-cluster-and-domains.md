Handling Errors with Cluster and Domains
========================================

* Speaker   : Paul A Jungwirth
* Available : any
* Length    : 20-45 mins

Description
-----------

Node's callback pattern makes error handling difficult: throwing an exception kills the entire node process, terminating all current requests, and every callback initiates a new stack, so stacktraces are terse and don't indicate how you got where you died. You can solve these problems using some newer features of Node called clusters and domains. This talk with explore using these tools for better error handling.

Links
-----
* Homepage: http://illuminatedcomputing.com/
* Github: http://github.com/pjungwir
* Company: Illuminated Computing
