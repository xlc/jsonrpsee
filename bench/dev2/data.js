window.BENCHMARK_DATA = {
  "lastUpdate": 1665411436765,
  "repoUrl": "https://github.com/paritytech/jsonrpsee",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "paritytech",
            "username": "paritytech"
          },
          "committer": {
            "name": "paritytech",
            "username": "paritytech"
          },
          "id": "c0f952dc234044a6f32ff5e0a166c007505084c0",
          "message": "fix gha gitlab bench again",
          "timestamp": "2022-10-05T12:19:16Z",
          "url": "https://github.com/paritytech/jsonrpsee/pull/897/commits/c0f952dc234044a6f32ff5e0a166c007505084c0"
        },
        "date": 1664972773434,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_array_params_baseline",
            "value": 316,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_array_params",
            "value": 451,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_object_params_baseline",
            "value": 322,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_object_params",
            "value": 459,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_custom_headers_round_trip/0kb",
            "value": 172551,
            "range": "± 28676",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_custom_headers_round_trip/1kb",
            "value": 191086,
            "range": "± 5976",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_custom_headers_round_trip/5kb",
            "value": 196179,
            "range": "± 10117",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_custom_headers_round_trip/25kb",
            "value": 225112,
            "range": "± 38614",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_custom_headers_round_trip/100kb",
            "value": 396984,
            "range": "± 26225",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/2",
            "value": 489746,
            "range": "± 28370",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/4",
            "value": 708689,
            "range": "± 20398",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/8",
            "value": 1482776,
            "range": "± 34466",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/fast_call",
            "value": 196872,
            "range": "± 10088",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/memory_intense",
            "value": 11142275,
            "range": "± 637997",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/slow_call",
            "value": 1269836,
            "range": "± 28560",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/2",
            "value": 215759,
            "range": "± 11026",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/5",
            "value": 244870,
            "range": "± 7808",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/10",
            "value": 281961,
            "range": "± 16760",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/50",
            "value": 658744,
            "range": "± 69604",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/100",
            "value": 1138738,
            "range": "± 24046",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_custom_headers_handshake/0kb",
            "value": 319172,
            "range": "± 18344",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_custom_headers_handshake/1kb",
            "value": 297867,
            "range": "± 22089",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_custom_headers_handshake/2kb",
            "value": 306577,
            "range": "± 20156",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_custom_headers_handshake/4kb",
            "value": 301989,
            "range": "± 14793",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/2",
            "value": 702156,
            "range": "± 66378",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/4",
            "value": 872460,
            "range": "± 43884",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/8",
            "value": 1017186,
            "range": "± 24105",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/fast_call",
            "value": 141130,
            "range": "± 4188",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/memory_intense",
            "value": 6153098,
            "range": "± 275257",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/slow_call",
            "value": 1218497,
            "range": "± 9882",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/2",
            "value": 174545,
            "range": "± 13826",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/5",
            "value": 210716,
            "range": "± 4509",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/10",
            "value": 256597,
            "range": "± 11248",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/50",
            "value": 672360,
            "range": "± 11526",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/100",
            "value": 1161625,
            "range": "± 20207",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/16",
            "value": 2836901,
            "range": "± 111144",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/32",
            "value": 5558575,
            "range": "± 212209",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/64",
            "value": 10656333,
            "range": "± 425930",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/16",
            "value": 1394819,
            "range": "± 39516",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/32",
            "value": 2579154,
            "range": "± 102053",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/64",
            "value": 4957402,
            "range": "± 418186",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/16",
            "value": 2427521,
            "range": "± 39865",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/32",
            "value": 4258802,
            "range": "± 81041",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/64",
            "value": 7610435,
            "range": "± 220533",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/128",
            "value": 18942813,
            "range": "± 927245",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/256",
            "value": 32385493,
            "range": "± 1349443",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/512",
            "value": 56157063,
            "range": "± 2851931",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/1024",
            "value": 104117401,
            "range": "± 5214099",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/128",
            "value": 10145795,
            "range": "± 366340",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/256",
            "value": 20272051,
            "range": "± 797429",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/512",
            "value": 37001181,
            "range": "± 1819782",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/1024",
            "value": 53245632,
            "range": "± 5378726",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/128",
            "value": 14545102,
            "range": "± 169731",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/256",
            "value": 27082763,
            "range": "± 341013",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/512",
            "value": 47003154,
            "range": "± 954290",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/1024",
            "value": 78458255,
            "range": "± 853713",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_custom_headers_round_trip/0kb",
            "value": 196073,
            "range": "± 6331",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_custom_headers_round_trip/1kb",
            "value": 191571,
            "range": "± 12495",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_custom_headers_round_trip/5kb",
            "value": 210253,
            "range": "± 13808",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_custom_headers_round_trip/25kb",
            "value": 223026,
            "range": "± 4102",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_custom_headers_round_trip/100kb",
            "value": 398750,
            "range": "± 14182",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/2",
            "value": 489164,
            "range": "± 17719",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/4",
            "value": 719521,
            "range": "± 19198",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/8",
            "value": 1473691,
            "range": "± 57282",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/fast_call",
            "value": 196765,
            "range": "± 1451",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/memory_intense",
            "value": 6789688,
            "range": "± 300475",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/slow_call",
            "value": 1271921,
            "range": "± 14254",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/2",
            "value": 203357,
            "range": "± 981",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/5",
            "value": 244760,
            "range": "± 9938",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/10",
            "value": 292375,
            "range": "± 7514",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/50",
            "value": 669979,
            "range": "± 12204",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/100",
            "value": 1148983,
            "range": "± 20711",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_custom_headers_handshake/0kb",
            "value": 300671,
            "range": "± 13263",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_custom_headers_handshake/1kb",
            "value": 295325,
            "range": "± 17631",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_custom_headers_handshake/2kb",
            "value": 297162,
            "range": "± 16173",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_custom_headers_handshake/4kb",
            "value": 300544,
            "range": "± 9093",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/2",
            "value": 678229,
            "range": "± 15447",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/4",
            "value": 831966,
            "range": "± 44863",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/8",
            "value": 988396,
            "range": "± 27067",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/fast_call",
            "value": 142815,
            "range": "± 1912",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/memory_intense",
            "value": 6035820,
            "range": "± 798092",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/slow_call",
            "value": 1209481,
            "range": "± 6028",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/2",
            "value": 165187,
            "range": "± 6579",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/5",
            "value": 198630,
            "range": "± 1437",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/10",
            "value": 249366,
            "range": "± 9542",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/50",
            "value": 659102,
            "range": "± 9542",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/100",
            "value": 1156702,
            "range": "± 33654",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/16",
            "value": 2803354,
            "range": "± 51936",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/32",
            "value": 5608163,
            "range": "± 161476",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/64",
            "value": 10804706,
            "range": "± 386226",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/16",
            "value": 1270696,
            "range": "± 42728",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/32",
            "value": 2294141,
            "range": "± 77888",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/64",
            "value": 4246282,
            "range": "± 313881",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/16",
            "value": 2430055,
            "range": "± 34991",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/32",
            "value": 4250138,
            "range": "± 114929",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/64",
            "value": 7610460,
            "range": "± 281737",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/128",
            "value": 19105441,
            "range": "± 538531",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/256",
            "value": 32204556,
            "range": "± 1233101",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/512",
            "value": 56108627,
            "range": "± 2688421",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/1024",
            "value": 103036463,
            "range": "± 5167356",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/128",
            "value": 9580678,
            "range": "± 507748",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/256",
            "value": 19369758,
            "range": "± 1057854",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/512",
            "value": 35032296,
            "range": "± 2945320",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/1024",
            "value": 50122496,
            "range": "± 4712926",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/128",
            "value": 14600623,
            "range": "± 156846",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/256",
            "value": 27244929,
            "range": "± 247808",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/512",
            "value": 47923196,
            "range": "± 960675",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/1024",
            "value": 78877023,
            "range": "± 834933",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 233814,
            "range": "± 2067",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 10723,
            "range": "± 2444",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 5723,
            "range": "± 1889",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alexander Samusev",
            "username": "alvicsam",
            "email": "41779041+alvicsam@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "cf3723535ae6777406a4e4cfbb6a32b980cd8b0b",
          "message": "[ci][benchmarks] Change output.txt file path in gitlab ci (#898)",
          "timestamp": "2022-10-07T12:45:22Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/cf3723535ae6777406a4e4cfbb6a32b980cd8b0b"
        },
        "date": 1665152136169,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_array_params_baseline",
            "value": 312,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_array_params",
            "value": 446,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_object_params_baseline",
            "value": 313,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_object_params",
            "value": 452,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_custom_headers_round_trip/0kb",
            "value": 212454,
            "range": "± 1787",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_custom_headers_round_trip/1kb",
            "value": 213323,
            "range": "± 3798",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_custom_headers_round_trip/5kb",
            "value": 217858,
            "range": "± 1018",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_custom_headers_round_trip/25kb",
            "value": 245351,
            "range": "± 1798",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_custom_headers_round_trip/100kb",
            "value": 413592,
            "range": "± 51201",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/2",
            "value": 520577,
            "range": "± 6692",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/4",
            "value": 780738,
            "range": "± 15510",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/8",
            "value": 1540162,
            "range": "± 30504",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/fast_call",
            "value": 211408,
            "range": "± 3083",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/memory_intense",
            "value": 10898935,
            "range": "± 903200",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/slow_call",
            "value": 1285104,
            "range": "± 3959",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/2",
            "value": 225322,
            "range": "± 6966",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/5",
            "value": 254913,
            "range": "± 3074",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/10",
            "value": 298224,
            "range": "± 2612",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/50",
            "value": 663251,
            "range": "± 14397",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/100",
            "value": 1118326,
            "range": "± 12830",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_custom_headers_handshake/0kb",
            "value": 274473,
            "range": "± 42833",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_custom_headers_handshake/1kb",
            "value": 298787,
            "range": "± 37505",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_custom_headers_handshake/2kb",
            "value": 298311,
            "range": "± 12251",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_custom_headers_handshake/4kb",
            "value": 299045,
            "range": "± 10323",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/2",
            "value": 631297,
            "range": "± 6264",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/4",
            "value": 684899,
            "range": "± 8965",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/8",
            "value": 857043,
            "range": "± 38569",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/fast_call",
            "value": 136417,
            "range": "± 774",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/memory_intense",
            "value": 6071496,
            "range": "± 429165",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/slow_call",
            "value": 1208339,
            "range": "± 4504",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/2",
            "value": 162286,
            "range": "± 730",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/5",
            "value": 194783,
            "range": "± 2024",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/10",
            "value": 246059,
            "range": "± 3240",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/50",
            "value": 652246,
            "range": "± 2392",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/100",
            "value": 1156917,
            "range": "± 5192",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/16",
            "value": 2674920,
            "range": "± 60743",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/32",
            "value": 5167817,
            "range": "± 211032",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/64",
            "value": 9872551,
            "range": "± 482047",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/16",
            "value": 1436686,
            "range": "± 66680",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/32",
            "value": 2653353,
            "range": "± 58291",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/64",
            "value": 5136710,
            "range": "± 125673",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/16",
            "value": 2633457,
            "range": "± 72109",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/32",
            "value": 5061455,
            "range": "± 103231",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/64",
            "value": 9751408,
            "range": "± 270550",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/128",
            "value": 17579407,
            "range": "± 652316",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/256",
            "value": 30307964,
            "range": "± 1138724",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/512",
            "value": 51711377,
            "range": "± 2891867",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/1024",
            "value": 96652116,
            "range": "± 5454811",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/128",
            "value": 10042370,
            "range": "± 187887",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/256",
            "value": 18314714,
            "range": "± 348311",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/512",
            "value": 30628413,
            "range": "± 422902",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/1024",
            "value": 48923884,
            "range": "± 774272",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/128",
            "value": 17141419,
            "range": "± 161597",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/256",
            "value": 27953210,
            "range": "± 545504",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/512",
            "value": 47018215,
            "range": "± 548719",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/1024",
            "value": 78677894,
            "range": "± 861246",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_custom_headers_round_trip/0kb",
            "value": 190213,
            "range": "± 2063",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_custom_headers_round_trip/1kb",
            "value": 191525,
            "range": "± 3798",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_custom_headers_round_trip/5kb",
            "value": 195998,
            "range": "± 2774",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_custom_headers_round_trip/25kb",
            "value": 223665,
            "range": "± 2508",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_custom_headers_round_trip/100kb",
            "value": 389162,
            "range": "± 6558",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/2",
            "value": 488905,
            "range": "± 10489",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/4",
            "value": 705249,
            "range": "± 12115",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/8",
            "value": 1406716,
            "range": "± 38047",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/fast_call",
            "value": 189781,
            "range": "± 1413",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/memory_intense",
            "value": 6495633,
            "range": "± 516945",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/slow_call",
            "value": 1265463,
            "range": "± 7668",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/2",
            "value": 204386,
            "range": "± 9281",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/5",
            "value": 232893,
            "range": "± 1139",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/10",
            "value": 279622,
            "range": "± 2653",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/50",
            "value": 644605,
            "range": "± 11644",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/100",
            "value": 1106270,
            "range": "± 9888",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_custom_headers_handshake/0kb",
            "value": 291685,
            "range": "± 13969",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_custom_headers_handshake/1kb",
            "value": 296038,
            "range": "± 19750",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_custom_headers_handshake/2kb",
            "value": 298215,
            "range": "± 10868",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_custom_headers_handshake/4kb",
            "value": 299182,
            "range": "± 8780",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/2",
            "value": 631763,
            "range": "± 6316",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/4",
            "value": 684074,
            "range": "± 12858",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/8",
            "value": 856508,
            "range": "± 24008",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/fast_call",
            "value": 137301,
            "range": "± 1825",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/memory_intense",
            "value": 6155874,
            "range": "± 108571",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/slow_call",
            "value": 1208877,
            "range": "± 12055",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/2",
            "value": 163356,
            "range": "± 1833",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/5",
            "value": 196036,
            "range": "± 2646",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/10",
            "value": 246677,
            "range": "± 5560",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/50",
            "value": 653202,
            "range": "± 4274",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/100",
            "value": 1153029,
            "range": "± 57802",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/16",
            "value": 2670679,
            "range": "± 31181",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/32",
            "value": 5189789,
            "range": "± 151779",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/64",
            "value": 9958410,
            "range": "± 349233",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/16",
            "value": 1437285,
            "range": "± 59985",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/32",
            "value": 2662227,
            "range": "± 97384",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/64",
            "value": 5149647,
            "range": "± 110017",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/16",
            "value": 2626415,
            "range": "± 68641",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/32",
            "value": 5047430,
            "range": "± 100923",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/64",
            "value": 9719441,
            "range": "± 239216",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/128",
            "value": 17552076,
            "range": "± 650229",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/256",
            "value": 30558879,
            "range": "± 1336149",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/512",
            "value": 51458091,
            "range": "± 2568455",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/1024",
            "value": 95729981,
            "range": "± 5345435",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/128",
            "value": 10094897,
            "range": "± 129705",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/256",
            "value": 18309743,
            "range": "± 300955",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/512",
            "value": 30500192,
            "range": "± 467836",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/1024",
            "value": 48806499,
            "range": "± 638638",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/128",
            "value": 17122702,
            "range": "± 188994",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/256",
            "value": 27859937,
            "range": "± 656208",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/512",
            "value": 46854580,
            "range": "± 590983",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/1024",
            "value": 78218617,
            "range": "± 767505",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 239053,
            "range": "± 1964",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 7305,
            "range": "± 652",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 6714,
            "range": "± 501",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alexander Samusev",
            "username": "alvicsam",
            "email": "41779041+alvicsam@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "cf3723535ae6777406a4e4cfbb6a32b980cd8b0b",
          "message": "[ci][benchmarks] Change output.txt file path in gitlab ci (#898)",
          "timestamp": "2022-10-07T12:45:22Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/cf3723535ae6777406a4e4cfbb6a32b980cd8b0b"
        },
        "date": 1665237962570,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_array_params_baseline",
            "value": 310,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_array_params",
            "value": 444,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_object_params_baseline",
            "value": 312,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_object_params",
            "value": 455,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_custom_headers_round_trip/0kb",
            "value": 192364,
            "range": "± 2378",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_custom_headers_round_trip/1kb",
            "value": 193176,
            "range": "± 9160",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_custom_headers_round_trip/5kb",
            "value": 198295,
            "range": "± 4040",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_custom_headers_round_trip/25kb",
            "value": 225590,
            "range": "± 2968",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_custom_headers_round_trip/100kb",
            "value": 393787,
            "range": "± 3386",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/2",
            "value": 488668,
            "range": "± 8822",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/4",
            "value": 705561,
            "range": "± 12661",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/8",
            "value": 1409477,
            "range": "± 72827",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/fast_call",
            "value": 191674,
            "range": "± 16446",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/memory_intense",
            "value": 10302298,
            "range": "± 723482",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/slow_call",
            "value": 1268571,
            "range": "± 3308",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/2",
            "value": 205521,
            "range": "± 1179",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/5",
            "value": 235607,
            "range": "± 1484",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/10",
            "value": 280951,
            "range": "± 1481",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/50",
            "value": 643741,
            "range": "± 4503",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/100",
            "value": 1113188,
            "range": "± 36375",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_custom_headers_handshake/0kb",
            "value": 288026,
            "range": "± 49578",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_custom_headers_handshake/1kb",
            "value": 294380,
            "range": "± 16378",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_custom_headers_handshake/2kb",
            "value": 294176,
            "range": "± 9105",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_custom_headers_handshake/4kb",
            "value": 304170,
            "range": "± 8096",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/2",
            "value": 627873,
            "range": "± 9666",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/4",
            "value": 684915,
            "range": "± 11092",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/8",
            "value": 855383,
            "range": "± 21273",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/fast_call",
            "value": 136091,
            "range": "± 1960",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/memory_intense",
            "value": 6215301,
            "range": "± 82877",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/slow_call",
            "value": 1207614,
            "range": "± 5402",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/2",
            "value": 162026,
            "range": "± 2588",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/5",
            "value": 194665,
            "range": "± 12491",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/10",
            "value": 245767,
            "range": "± 599",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/50",
            "value": 653672,
            "range": "± 1741",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/100",
            "value": 1155526,
            "range": "± 6792",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/16",
            "value": 2675248,
            "range": "± 47562",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/32",
            "value": 5141165,
            "range": "± 157903",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/64",
            "value": 9931799,
            "range": "± 379463",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/16",
            "value": 1434112,
            "range": "± 146366",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/32",
            "value": 2656646,
            "range": "± 83227",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/64",
            "value": 5132489,
            "range": "± 92305",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/16",
            "value": 2639043,
            "range": "± 55258",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/32",
            "value": 5085202,
            "range": "± 97223",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/64",
            "value": 9798719,
            "range": "± 200473",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/128",
            "value": 17548008,
            "range": "± 839596",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/256",
            "value": 30691851,
            "range": "± 1355939",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/512",
            "value": 51837720,
            "range": "± 3264578",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/1024",
            "value": 95725974,
            "range": "± 5576867",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/128",
            "value": 10044143,
            "range": "± 161441",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/256",
            "value": 18344770,
            "range": "± 334045",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/512",
            "value": 30547611,
            "range": "± 536142",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/1024",
            "value": 48665573,
            "range": "± 843654",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/128",
            "value": 17145896,
            "range": "± 153642",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/256",
            "value": 27937702,
            "range": "± 661041",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/512",
            "value": 46925814,
            "range": "± 532172",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/1024",
            "value": 78719900,
            "range": "± 901104",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_custom_headers_round_trip/0kb",
            "value": 191757,
            "range": "± 2399",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_custom_headers_round_trip/1kb",
            "value": 191730,
            "range": "± 3373",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_custom_headers_round_trip/5kb",
            "value": 197888,
            "range": "± 2910",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_custom_headers_round_trip/25kb",
            "value": 224609,
            "range": "± 1414",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_custom_headers_round_trip/100kb",
            "value": 388542,
            "range": "± 27267",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/2",
            "value": 491026,
            "range": "± 7241",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/4",
            "value": 703761,
            "range": "± 9932",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/8",
            "value": 1411104,
            "range": "± 17683",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/fast_call",
            "value": 190635,
            "range": "± 1761",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/memory_intense",
            "value": 6567284,
            "range": "± 324227",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/slow_call",
            "value": 1265221,
            "range": "± 6039",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/2",
            "value": 205796,
            "range": "± 2627",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/5",
            "value": 234259,
            "range": "± 2100",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/10",
            "value": 280236,
            "range": "± 7538",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/50",
            "value": 650506,
            "range": "± 6843",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/100",
            "value": 1115929,
            "range": "± 15452",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_custom_headers_handshake/0kb",
            "value": 286321,
            "range": "± 23845",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_custom_headers_handshake/1kb",
            "value": 292655,
            "range": "± 16008",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_custom_headers_handshake/2kb",
            "value": 293593,
            "range": "± 10927",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_custom_headers_handshake/4kb",
            "value": 305374,
            "range": "± 5660",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/2",
            "value": 630075,
            "range": "± 20292",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/4",
            "value": 684243,
            "range": "± 12153",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/8",
            "value": 853723,
            "range": "± 47223",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/fast_call",
            "value": 136085,
            "range": "± 6532",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/memory_intense",
            "value": 6228068,
            "range": "± 69781",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/slow_call",
            "value": 1207672,
            "range": "± 4988",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/2",
            "value": 161845,
            "range": "± 1624",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/5",
            "value": 194553,
            "range": "± 10035",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/10",
            "value": 245587,
            "range": "± 1849",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/50",
            "value": 653250,
            "range": "± 47116",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/100",
            "value": 1156028,
            "range": "± 47924",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/16",
            "value": 2670306,
            "range": "± 98759",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/32",
            "value": 5160325,
            "range": "± 165691",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/64",
            "value": 9955042,
            "range": "± 383665",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/16",
            "value": 1428685,
            "range": "± 65519",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/32",
            "value": 2662339,
            "range": "± 41497",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/64",
            "value": 5146582,
            "range": "± 105391",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/16",
            "value": 2637115,
            "range": "± 51669",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/32",
            "value": 5107032,
            "range": "± 81433",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/64",
            "value": 9838415,
            "range": "± 197341",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/128",
            "value": 17757439,
            "range": "± 569419",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/256",
            "value": 30421891,
            "range": "± 1214561",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/512",
            "value": 51200472,
            "range": "± 2966714",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/1024",
            "value": 96682668,
            "range": "± 4985641",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/128",
            "value": 10059971,
            "range": "± 122345",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/256",
            "value": 18353324,
            "range": "± 356281",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/512",
            "value": 30519004,
            "range": "± 427853",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/1024",
            "value": 48689040,
            "range": "± 782924",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/128",
            "value": 17088033,
            "range": "± 252861",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/256",
            "value": 28033496,
            "range": "± 701002",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/512",
            "value": 47017489,
            "range": "± 597328",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/1024",
            "value": 79035841,
            "range": "± 741729",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 238751,
            "range": "± 1748",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 8598,
            "range": "± 1606",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 7578,
            "range": "± 621",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Alexander Samusev",
            "username": "alvicsam",
            "email": "41779041+alvicsam@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "cf3723535ae6777406a4e4cfbb6a32b980cd8b0b",
          "message": "[ci][benchmarks] Change output.txt file path in gitlab ci (#898)",
          "timestamp": "2022-10-07T12:45:22Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/cf3723535ae6777406a4e4cfbb6a32b980cd8b0b"
        },
        "date": 1665324274969,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_array_params_baseline",
            "value": 311,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_array_params",
            "value": 444,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_object_params_baseline",
            "value": 313,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_object_params",
            "value": 454,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_custom_headers_round_trip/0kb",
            "value": 189863,
            "range": "± 5666",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_custom_headers_round_trip/1kb",
            "value": 191105,
            "range": "± 1702",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_custom_headers_round_trip/5kb",
            "value": 196041,
            "range": "± 4771",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_custom_headers_round_trip/25kb",
            "value": 223407,
            "range": "± 4109",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_custom_headers_round_trip/100kb",
            "value": 391216,
            "range": "± 6423",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/2",
            "value": 487809,
            "range": "± 8997",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/4",
            "value": 703730,
            "range": "± 9798",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/8",
            "value": 1412940,
            "range": "± 35174",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/fast_call",
            "value": 188620,
            "range": "± 10857",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/memory_intense",
            "value": 10719213,
            "range": "± 657808",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/slow_call",
            "value": 1266220,
            "range": "± 10022",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/2",
            "value": 203670,
            "range": "± 3974",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/5",
            "value": 232847,
            "range": "± 8139",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/10",
            "value": 279314,
            "range": "± 6530",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/50",
            "value": 644198,
            "range": "± 3671",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/100",
            "value": 1112034,
            "range": "± 8518",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_custom_headers_handshake/0kb",
            "value": 293981,
            "range": "± 12152",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_custom_headers_handshake/1kb",
            "value": 298685,
            "range": "± 6549",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_custom_headers_handshake/2kb",
            "value": 291105,
            "range": "± 16495",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_custom_headers_handshake/4kb",
            "value": 306060,
            "range": "± 6246",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/2",
            "value": 632416,
            "range": "± 11998",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/4",
            "value": 684736,
            "range": "± 15669",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/8",
            "value": 856225,
            "range": "± 24608",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/fast_call",
            "value": 138191,
            "range": "± 549",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/memory_intense",
            "value": 6254674,
            "range": "± 843051",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/slow_call",
            "value": 1209155,
            "range": "± 11804",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/2",
            "value": 163800,
            "range": "± 16353",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/5",
            "value": 196186,
            "range": "± 1903",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/10",
            "value": 247461,
            "range": "± 3224",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/50",
            "value": 655614,
            "range": "± 4783",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/100",
            "value": 1157853,
            "range": "± 110339",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/16",
            "value": 2651034,
            "range": "± 88684",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/32",
            "value": 5124991,
            "range": "± 241277",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/64",
            "value": 9774213,
            "range": "± 517420",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/16",
            "value": 1429168,
            "range": "± 79608",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/32",
            "value": 2652554,
            "range": "± 54999",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/64",
            "value": 5135061,
            "range": "± 120675",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/16",
            "value": 2617458,
            "range": "± 87001",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/32",
            "value": 5063695,
            "range": "± 82027",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/64",
            "value": 9779801,
            "range": "± 257947",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/128",
            "value": 17514938,
            "range": "± 750592",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/256",
            "value": 30160774,
            "range": "± 989933",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/512",
            "value": 52054031,
            "range": "± 2710241",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/1024",
            "value": 96147318,
            "range": "± 6433126",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/128",
            "value": 10137448,
            "range": "± 115364",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/256",
            "value": 18671277,
            "range": "± 239589",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/512",
            "value": 30662530,
            "range": "± 421995",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/1024",
            "value": 48948815,
            "range": "± 770168",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/128",
            "value": 17158834,
            "range": "± 187365",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/256",
            "value": 28175069,
            "range": "± 733329",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/512",
            "value": 46993294,
            "range": "± 564837",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/1024",
            "value": 78963573,
            "range": "± 951397",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_custom_headers_round_trip/0kb",
            "value": 189482,
            "range": "± 1939",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_custom_headers_round_trip/1kb",
            "value": 191055,
            "range": "± 1915",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_custom_headers_round_trip/5kb",
            "value": 196333,
            "range": "± 1336",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_custom_headers_round_trip/25kb",
            "value": 221915,
            "range": "± 5992",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_custom_headers_round_trip/100kb",
            "value": 390675,
            "range": "± 14731",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/2",
            "value": 489297,
            "range": "± 7271",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/4",
            "value": 702546,
            "range": "± 9100",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/8",
            "value": 1406623,
            "range": "± 33885",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/fast_call",
            "value": 187752,
            "range": "± 7620",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/memory_intense",
            "value": 6602605,
            "range": "± 297676",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/slow_call",
            "value": 1262638,
            "range": "± 17050",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/2",
            "value": 202704,
            "range": "± 6994",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/5",
            "value": 232595,
            "range": "± 5189",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/10",
            "value": 278330,
            "range": "± 1636",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/50",
            "value": 644215,
            "range": "± 4520",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/100",
            "value": 1117630,
            "range": "± 13869",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_custom_headers_handshake/0kb",
            "value": 295093,
            "range": "± 14586",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_custom_headers_handshake/1kb",
            "value": 297938,
            "range": "± 20250",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_custom_headers_handshake/2kb",
            "value": 295172,
            "range": "± 8850",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_custom_headers_handshake/4kb",
            "value": 305065,
            "range": "± 10159",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/2",
            "value": 632423,
            "range": "± 7256",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/4",
            "value": 687038,
            "range": "± 9171",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/8",
            "value": 858117,
            "range": "± 61016",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/fast_call",
            "value": 138356,
            "range": "± 748",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/memory_intense",
            "value": 6331869,
            "range": "± 135389",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/slow_call",
            "value": 1209509,
            "range": "± 8168",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/2",
            "value": 163805,
            "range": "± 1454",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/5",
            "value": 197353,
            "range": "± 1701",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/10",
            "value": 247867,
            "range": "± 9062",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/50",
            "value": 658517,
            "range": "± 5510",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/100",
            "value": 1158045,
            "range": "± 112316",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/16",
            "value": 2661846,
            "range": "± 68593",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/32",
            "value": 5127892,
            "range": "± 107514",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/64",
            "value": 9729486,
            "range": "± 450996",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/16",
            "value": 1439179,
            "range": "± 54166",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/32",
            "value": 2679118,
            "range": "± 64389",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/64",
            "value": 5168526,
            "range": "± 105601",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/16",
            "value": 2642130,
            "range": "± 42757",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/32",
            "value": 5093606,
            "range": "± 147393",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/64",
            "value": 9782231,
            "range": "± 320837",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/128",
            "value": 17421728,
            "range": "± 759613",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/256",
            "value": 30090539,
            "range": "± 1150356",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/512",
            "value": 51329612,
            "range": "± 2614056",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/1024",
            "value": 95235124,
            "range": "± 6360464",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/128",
            "value": 10125037,
            "range": "± 137308",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/256",
            "value": 18550720,
            "range": "± 419386",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/512",
            "value": 30780465,
            "range": "± 535723",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/1024",
            "value": 48849944,
            "range": "± 669543",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/128",
            "value": 17116685,
            "range": "± 244705",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/256",
            "value": 28153074,
            "range": "± 618012",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/512",
            "value": 47047158,
            "range": "± 600346",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/1024",
            "value": 78782751,
            "range": "± 909245",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 236306,
            "range": "± 5840",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 8397,
            "range": "± 955",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 7188,
            "range": "± 469",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Niklas Adolfsson",
            "username": "niklasad1",
            "email": "niklasadolfsson1@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "264e0a8d4f3308db880d60b563eaf3410754eef9",
          "message": "update readme (#899)",
          "timestamp": "2022-10-10T09:55:26Z",
          "url": "https://github.com/paritytech/jsonrpsee/commit/264e0a8d4f3308db880d60b563eaf3410754eef9"
        },
        "date": 1665411436142,
        "tool": "cargo",
        "benches": [
          {
            "name": "jsonrpsee_types_array_params_baseline",
            "value": 312,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_array_params",
            "value": 448,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_object_params_baseline",
            "value": 314,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "jsonrpsee_types_object_params",
            "value": 459,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_custom_headers_round_trip/0kb",
            "value": 189909,
            "range": "± 2405",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_custom_headers_round_trip/1kb",
            "value": 190894,
            "range": "± 31216",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_custom_headers_round_trip/5kb",
            "value": 195730,
            "range": "± 2947",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_custom_headers_round_trip/25kb",
            "value": 223674,
            "range": "± 921",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_custom_headers_round_trip/100kb",
            "value": 389060,
            "range": "± 4973",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/2",
            "value": 485589,
            "range": "± 7339",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/4",
            "value": 702138,
            "range": "± 13201",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/8",
            "value": 1416590,
            "range": "± 23299",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/fast_call",
            "value": 188384,
            "range": "± 1622",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/memory_intense",
            "value": 10129810,
            "range": "± 793984",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_round_trip/slow_call",
            "value": 1263421,
            "range": "± 15513",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/2",
            "value": 203907,
            "range": "± 8674",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/5",
            "value": 232462,
            "range": "± 2194",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/10",
            "value": 277954,
            "range": "± 31816",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/50",
            "value": 644066,
            "range": "± 73185",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_batch_requests/fast_call/100",
            "value": 727744,
            "range": "± 190838",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_custom_headers_handshake/0kb",
            "value": 292891,
            "range": "± 21215",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_custom_headers_handshake/1kb",
            "value": 295667,
            "range": "± 18779",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_custom_headers_handshake/2kb",
            "value": 295961,
            "range": "± 11492",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_custom_headers_handshake/4kb",
            "value": 297064,
            "range": "± 12136",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/2",
            "value": 630788,
            "range": "± 15039",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/4",
            "value": 680881,
            "range": "± 12847",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/8",
            "value": 854155,
            "range": "± 32617",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/fast_call",
            "value": 136981,
            "range": "± 4500",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/memory_intense",
            "value": 6216306,
            "range": "± 100798",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_round_trip/slow_call",
            "value": 1210220,
            "range": "± 12768",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/2",
            "value": 163303,
            "range": "± 1457",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/5",
            "value": 195977,
            "range": "± 26064",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/10",
            "value": 246667,
            "range": "± 28562",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/50",
            "value": 655865,
            "range": "± 6869",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_batch_requests/fast_call/100",
            "value": 1155703,
            "range": "± 24289",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/16",
            "value": 2683407,
            "range": "± 44142",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/32",
            "value": 5165969,
            "range": "± 126959",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/64",
            "value": 9844693,
            "range": "± 429496",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/16",
            "value": 1436351,
            "range": "± 86053",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/32",
            "value": 2673838,
            "range": "± 77291",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/64",
            "value": 5169615,
            "range": "± 95757",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/16",
            "value": 2633761,
            "range": "± 72080",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/32",
            "value": 5069414,
            "range": "± 88892",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/64",
            "value": 9773903,
            "range": "± 191906",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/128",
            "value": 17800663,
            "range": "± 549471",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/256",
            "value": 30770407,
            "range": "± 1180874",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/512",
            "value": 52025125,
            "range": "± 2663947",
            "unit": "ns/iter"
          },
          {
            "name": "sync/http_concurrent_conn_calls/fast_call/1024",
            "value": 96343201,
            "range": "± 5875133",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/128",
            "value": 10098774,
            "range": "± 203256",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/256",
            "value": 18398265,
            "range": "± 292340",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/512",
            "value": 30612995,
            "range": "± 497834",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_calls/fast_call/1024",
            "value": 48938214,
            "range": "± 665972",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/128",
            "value": 17143184,
            "range": "± 165235",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/256",
            "value": 27932122,
            "range": "± 582911",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/512",
            "value": 46960626,
            "range": "± 545024",
            "unit": "ns/iter"
          },
          {
            "name": "sync/ws_concurrent_conn_subs/1024",
            "value": 78860997,
            "range": "± 884285",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_custom_headers_round_trip/0kb",
            "value": 189088,
            "range": "± 1231",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_custom_headers_round_trip/1kb",
            "value": 191502,
            "range": "± 5397",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_custom_headers_round_trip/5kb",
            "value": 195807,
            "range": "± 1479",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_custom_headers_round_trip/25kb",
            "value": 223695,
            "range": "± 1133",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_custom_headers_round_trip/100kb",
            "value": 393019,
            "range": "± 7765",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/2",
            "value": 486538,
            "range": "± 9530",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/4",
            "value": 706464,
            "range": "± 8663",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/8",
            "value": 1413275,
            "range": "± 29002",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/fast_call",
            "value": 188514,
            "range": "± 1142",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/memory_intense",
            "value": 6537652,
            "range": "± 197174",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_round_trip/slow_call",
            "value": 1265246,
            "range": "± 9455",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/2",
            "value": 204106,
            "range": "± 2069",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/5",
            "value": 231679,
            "range": "± 3276",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/10",
            "value": 278436,
            "range": "± 3960",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/50",
            "value": 648634,
            "range": "± 6320",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_batch_requests/fast_call/100",
            "value": 1119835,
            "range": "± 77279",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_custom_headers_handshake/0kb",
            "value": 293018,
            "range": "± 17746",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_custom_headers_handshake/1kb",
            "value": 295230,
            "range": "± 11667",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_custom_headers_handshake/2kb",
            "value": 297423,
            "range": "± 9875",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_custom_headers_handshake/4kb",
            "value": 298398,
            "range": "± 10434",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/2",
            "value": 629646,
            "range": "± 9601",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/4",
            "value": 684132,
            "range": "± 12761",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/8",
            "value": 857618,
            "range": "± 62372",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/fast_call",
            "value": 138220,
            "range": "± 404",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/memory_intense",
            "value": 6321684,
            "range": "± 67445",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_round_trip/slow_call",
            "value": 1209725,
            "range": "± 4548",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/2",
            "value": 162916,
            "range": "± 465",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/5",
            "value": 195966,
            "range": "± 5904",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/10",
            "value": 246240,
            "range": "± 7129",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/50",
            "value": 656351,
            "range": "± 6073",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_batch_requests/fast_call/100",
            "value": 1154754,
            "range": "± 9343",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/16",
            "value": 2689587,
            "range": "± 39237",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/32",
            "value": 5199414,
            "range": "± 106411",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/64",
            "value": 9948917,
            "range": "± 302621",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/16",
            "value": 1451525,
            "range": "± 81936",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/32",
            "value": 2670771,
            "range": "± 82253",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/64",
            "value": 5162170,
            "range": "± 124492",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/16",
            "value": 2622497,
            "range": "± 109307",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/32",
            "value": 5073397,
            "range": "± 111357",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/64",
            "value": 9766305,
            "range": "± 224302",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/128",
            "value": 17726745,
            "range": "± 582843",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/256",
            "value": 30639290,
            "range": "± 1353519",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/512",
            "value": 53069593,
            "range": "± 2595823",
            "unit": "ns/iter"
          },
          {
            "name": "async/http_concurrent_conn_calls/fast_call/1024",
            "value": 97530217,
            "range": "± 5840872",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/128",
            "value": 10127271,
            "range": "± 143276",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/256",
            "value": 18411753,
            "range": "± 376089",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/512",
            "value": 30622533,
            "range": "± 504399",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_calls/fast_call/1024",
            "value": 48958434,
            "range": "± 733304",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/128",
            "value": 17098335,
            "range": "± 213674",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/256",
            "value": 27916599,
            "range": "± 711451",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/512",
            "value": 46941061,
            "range": "± 495991",
            "unit": "ns/iter"
          },
          {
            "name": "async/ws_concurrent_conn_subs/1024",
            "value": 78727563,
            "range": "± 978302",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe",
            "value": 236869,
            "range": "± 8912",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/subscribe_response",
            "value": 9312,
            "range": "± 1316",
            "unit": "ns/iter"
          },
          {
            "name": "subscriptions/unsub",
            "value": 9147,
            "range": "± 739",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}