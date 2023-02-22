const form = document.getElementById('upload-form');
const fileInput = document.getElementById('file-input');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');
const endSessionBtn = document.getElementById('end-session-btn');
// import data from './data.json'

const data = [
    {
        "time": "11:19:02 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 196,
        "y": 327
    },
    {
        "time": "11:19:02 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 203,
        "y": 331
    },
    {
        "time": "11:19:02 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 207,
        "y": 333
    },
    {
        "time": "11:19:02 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 214,
        "y": 331
    },
    {
        "time": "11:19:02 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 240,
        "y": 318
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 278,
        "y": 295
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 315,
        "y": 270
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 344,
        "y": 249
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 367,
        "y": 229
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 379,
        "y": 221
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 379,
        "y": 220
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 380,
        "y": 220
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 393,
        "y": 222
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 424,
        "y": 218
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 457,
        "y": 209
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 482,
        "y": 202
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 505,
        "y": 196
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 530,
        "y": 194
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 558,
        "y": 191
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 592,
        "y": 189
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 647,
        "y": 186
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 673,
        "y": 185
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 690,
        "y": 185
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 706,
        "y": 187
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 735,
        "y": 189
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 773,
        "y": 188
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 814,
        "y": 178
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 847,
        "y": 164
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 881,
        "y": 151
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 915,
        "y": 140
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 954,
        "y": 127
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 996,
        "y": 112
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 1029,
        "y": 100
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 1074,
        "y": 66
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 1096,
        "y": 45
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 1110,
        "y": 34
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 1120,
        "y": 29
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 1126,
        "y": 26
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 1129,
        "y": 24
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 1129,
        "y": 23
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 1129,
        "y": 23
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 1130,
        "y": 23
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 1130,
        "y": 22
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 1136,
        "y": 19
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 1157,
        "y": 14
    },
    {
        "time": "11:19:03 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 1203,
        "y": 1
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 1299,
        "y": 12
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 1279,
        "y": 26
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 1259,
        "y": 40
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 1235,
        "y": 59
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 1205,
        "y": 83
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 1166,
        "y": 112
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 1106,
        "y": 151
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 1042,
        "y": 184
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 980,
        "y": 214
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 923,
        "y": 238
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 867,
        "y": 262
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 780,
        "y": 298
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 716,
        "y": 316
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 635,
        "y": 330
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 562,
        "y": 340
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 494,
        "y": 351
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 441,
        "y": 361
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 400,
        "y": 367
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 368,
        "y": 368
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 344,
        "y": 366
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 328,
        "y": 360
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 319,
        "y": 353
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 318,
        "y": 349
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 319,
        "y": 336
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 321,
        "y": 332
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 325,
        "y": 329
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 332,
        "y": 325
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 341,
        "y": 324
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 351,
        "y": 323
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 372,
        "y": 325
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 400,
        "y": 330
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 424,
        "y": 337
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 440,
        "y": 346
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 453,
        "y": 358
    },
    {
        "time": "11:19:07 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 460,
        "y": 384
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 460,
        "y": 399
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 451,
        "y": 448
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 436,
        "y": 477
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 416,
        "y": 498
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 394,
        "y": 515
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 371,
        "y": 529
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 348,
        "y": 538
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 330,
        "y": 540
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 323,
        "y": 540
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 320,
        "y": 535
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 318,
        "y": 518
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 317,
        "y": 493
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 326,
        "y": 440
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 335,
        "y": 402
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 344,
        "y": 377
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 355,
        "y": 359
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 365,
        "y": 341
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 373,
        "y": 326
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 378,
        "y": 317
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 380,
        "y": 316
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 381,
        "y": 314
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 383,
        "y": 312
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 385,
        "y": 310
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 386,
        "y": 309
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 386,
        "y": 307
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 394,
        "y": 297
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 401,
        "y": 288
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 414,
        "y": 273
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 431,
        "y": 251
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 450,
        "y": 222
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 466,
        "y": 199
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 473,
        "y": 186
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 476,
        "y": 178
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 477,
        "y": 171
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 471,
        "y": 160
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 470,
        "y": 159
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 464,
        "y": 158
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 458,
        "y": 158
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 454,
        "y": 159
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 450,
        "y": 160
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 443,
        "y": 162
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 441,
        "y": 163
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 440,
        "y": 163
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 440,
        "y": 163
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 442,
        "y": 163
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 442,
        "y": 163
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 444,
        "y": 162
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 446,
        "y": 161
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 450,
        "y": 160
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 454,
        "y": 160
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 457,
        "y": 158
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 459,
        "y": 157
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 461,
        "y": 157
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 463,
        "y": 157
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 479,
        "y": 156
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 486,
        "y": 155
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 489,
        "y": 154
    },
    {
        "time": "11:19:08 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 490,
        "y": 154
    },
    {
        "time": "11:19:09 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 491,
        "y": 154
    },
    {
        "time": "11:19:09 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 491,
        "y": 154
    },
    {
        "time": "11:19:09 GMT+0530 (India Standard Time)",
        "event": "click",
        "name": "INPUT",
        "elemId": "name-input"
    },
    {
        "time": "11:19:11 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "name",
        "value": "h",
        "elemId": "name-input"
    },
    {
        "time": "11:19:11 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "name",
        "value": "he",
        "elemId": "name-input"
    },
    {
        "time": "11:19:11 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "name",
        "value": "hel",
        "elemId": "name-input"
    },
    {
        "time": "11:19:11 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "name",
        "value": "hell",
        "elemId": "name-input"
    },
    {
        "time": "11:19:11 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "name",
        "value": "hello",
        "elemId": "name-input"
    },
    {
        "time": "11:19:12 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "name",
        "value": "hello ",
        "elemId": "name-input"
    },
    {
        "time": "11:19:12 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "name",
        "value": "hello w",
        "elemId": "name-input"
    },
    {
        "time": "11:19:12 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "name",
        "value": "hello wo",
        "elemId": "name-input"
    },
    {
        "time": "11:19:12 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "name",
        "value": "hello wor",
        "elemId": "name-input"
    },
    {
        "time": "11:19:12 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "name",
        "value": "hello worl",
        "elemId": "name-input"
    },
    {
        "time": "11:19:14 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "email",
        "value": "t",
        "elemId": "email-input"
    },
    {
        "time": "11:19:14 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "email",
        "value": "th",
        "elemId": "email-input"
    },
    {
        "time": "11:19:14 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "email",
        "value": "thi",
        "elemId": "email-input"
    },
    {
        "time": "11:19:14 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "email",
        "value": "this",
        "elemId": "email-input"
    },
    {
        "time": "11:19:15 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "email",
        "value": "thisi",
        "elemId": "email-input"
    },
    {
        "time": "11:19:15 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "email",
        "value": "thisis",
        "elemId": "email-input"
    },
    {
        "time": "11:19:15 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "email",
        "value": "thisism",
        "elemId": "email-input"
    },
    {
        "time": "11:19:15 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "email",
        "value": "thisisme",
        "elemId": "email-input"
    },
    {
        "time": "11:19:16 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "email",
        "value": "thisisme@",
        "elemId": "email-input"
    },
    {
        "time": "11:19:17 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "email",
        "value": "thisisme@y",
        "elemId": "email-input"
    },
    {
        "time": "11:19:17 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "email",
        "value": "thisisme@yo",
        "elemId": "email-input"
    },
    {
        "time": "11:19:18 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "email",
        "value": "thisisme@yop",
        "elemId": "email-input"
    },
    {
        "time": "11:19:18 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "email",
        "value": "thisisme@yopm",
        "elemId": "email-input"
    },
    {
        "time": "11:19:19 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "email",
        "value": "thisisme@yopma",
        "elemId": "email-input"
    },
    {
        "time": "11:19:19 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "email",
        "value": "thisisme@yopmai",
        "elemId": "email-input"
    },
    {
        "time": "11:19:19 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "email",
        "value": "thisisme@yopmail",
        "elemId": "email-input"
    },
    {
        "time": "11:19:19 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "email",
        "value": "thisisme@yopmail.",
        "elemId": "email-input"
    },
    {
        "time": "11:19:19 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "email",
        "value": "thisisme@yopmail.c",
        "elemId": "email-input"
    },
    {
        "time": "11:19:20 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "email",
        "value": "thisisme@yopmail.co",
        "elemId": "email-input"
    },
    {
        "time": "11:19:20 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "email",
        "value": "thisisme@yopmail.com",
        "elemId": "email-input"
    },
    {
        "time": "11:19:21 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "address",
        "value": "3",
        "elemId": "address-input"
    },
    {
        "time": "11:19:21 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "address",
        "value": "32",
        "elemId": "address-input"
    },
    {
        "time": "11:19:21 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "address",
        "value": "329",
        "elemId": "address-input"
    },
    {
        "time": "11:19:21 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "address",
        "value": "3298",
        "elemId": "address-input"
    },
    {
        "time": "11:19:21 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "address",
        "value": "32983",
        "elemId": "address-input"
    },
    {
        "time": "11:19:21 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "address",
        "value": "329832",
        "elemId": "address-input"
    },
    {
        "time": "11:19:21 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "address",
        "value": "3298329",
        "elemId": "address-input"
    },
    {
        "time": "11:19:21 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "address",
        "value": "32983298",
        "elemId": "address-input"
    },
    {
        "time": "11:19:22 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "address",
        "value": "329832983",
        "elemId": "address-input"
    },
    {
        "time": "11:19:22 GMT+0530 (India Standard Time)",
        "event": "input",
        "name": "address",
        "value": "3298329837",
        "elemId": "address-input"
    },
    {
        "time": "11:19:23 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 475,
        "y": 164
    },
    {
        "time": "11:19:23 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 444,
        "y": 179
    },
    {
        "time": "11:19:23 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 413,
        "y": 190
    },
    {
        "time": "11:19:23 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 389,
        "y": 199
    },
    {
        "time": "11:19:23 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 376,
        "y": 204
    },
    {
        "time": "11:19:23 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 352,
        "y": 212
    },
    {
        "time": "11:19:23 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 329,
        "y": 220
    },
    {
        "time": "11:19:23 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 303,
        "y": 228
    },
    {
        "time": "11:19:23 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 280,
        "y": 232
    },
    {
        "time": "11:19:23 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 270,
        "y": 234
    },
    {
        "time": "11:19:23 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 268,
        "y": 234
    },
    {
        "time": "11:19:23 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 266,
        "y": 234
    },
    {
        "time": "11:19:23 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 262,
        "y": 234
    },
    {
        "time": "11:19:23 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 257,
        "y": 229
    },
    {
        "time": "11:19:23 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 252,
        "y": 223
    },
    {
        "time": "11:19:23 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 245,
        "y": 215
    },
    {
        "time": "11:19:23 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 237,
        "y": 208
    },
    {
        "time": "11:19:23 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 232,
        "y": 202
    },
    {
        "time": "11:19:23 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 231,
        "y": 200
    },
    {
        "time": "11:19:23 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 230,
        "y": 197
    },
    {
        "time": "11:19:23 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 230,
        "y": 191
    },
    {
        "time": "11:19:23 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 233,
        "y": 184
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 235,
        "y": 178
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 235,
        "y": 177
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 235,
        "y": 171
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 237,
        "y": 166
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 240,
        "y": 160
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 240,
        "y": 157
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 240,
        "y": 156
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 240,
        "y": 155
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 240,
        "y": 154
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 257,
        "y": 163
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 270,
        "y": 185
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 270,
        "y": 185
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 270,
        "y": 186
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 270,
        "y": 185
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 270,
        "y": 175
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 270,
        "y": 174
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 270,
        "y": 160
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 270,
        "y": 152
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 270,
        "y": 151
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 270,
        "y": 151
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 270,
        "y": 151
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 269,
        "y": 151
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 266,
        "y": 150
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 266,
        "y": 150
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 266,
        "y": 149
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 266,
        "y": 149
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 266,
        "y": 149
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 280,
        "y": 133
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 291,
        "y": 125
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 306,
        "y": 118
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 324,
        "y": 113
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 351,
        "y": 108
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 382,
        "y": 103
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 420,
        "y": 98
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 477,
        "y": 86
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 508,
        "y": 81
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 535,
        "y": 79
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 556,
        "y": 79
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 570,
        "y": 79
    },
    {
        "time": "11:19:24 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 578,
        "y": 79
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 582,
        "y": 79
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 589,
        "y": 77
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 602,
        "y": 76
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 624,
        "y": 75
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 644,
        "y": 74
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 655,
        "y": 71
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 661,
        "y": 70
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 670,
        "y": 71
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 681,
        "y": 73
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 690,
        "y": 71
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 692,
        "y": 70
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 692,
        "y": 69
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 692,
        "y": 69
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 692,
        "y": 69
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 692,
        "y": 68
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 688,
        "y": 65
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 687,
        "y": 65
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 687,
        "y": 65
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 684,
        "y": 65
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 672,
        "y": 67
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 664,
        "y": 71
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 658,
        "y": 73
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 653,
        "y": 75
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 651,
        "y": 76
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 651,
        "y": 76
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 651,
        "y": 76
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 651,
        "y": 76
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 650,
        "y": 76
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 650,
        "y": 77
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 649,
        "y": 77
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 649,
        "y": 77
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 649,
        "y": 77
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 649,
        "y": 76
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 650,
        "y": 76
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 650,
        "y": 76
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 651,
        "y": 75
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 652,
        "y": 74
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 652,
        "y": 74
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 652,
        "y": 74
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 653,
        "y": 74
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 654,
        "y": 73
    },
    {
        "time": "11:19:25 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 654,
        "y": 73
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 653,
        "y": 74
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 643,
        "y": 81
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 635,
        "y": 85
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 616,
        "y": 92
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 597,
        "y": 97
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 580,
        "y": 103
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 573,
        "y": 105
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 571,
        "y": 106
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 569,
        "y": 113
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 563,
        "y": 119
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 552,
        "y": 126
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 537,
        "y": 133
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 517,
        "y": 138
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 493,
        "y": 143
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 465,
        "y": 147
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 427,
        "y": 152
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 384,
        "y": 156
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 316,
        "y": 157
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 268,
        "y": 159
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 223,
        "y": 160
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 187,
        "y": 162
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 165,
        "y": 166
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 156,
        "y": 168
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 153,
        "y": 169
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 152,
        "y": 170
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 152,
        "y": 170
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 150,
        "y": 171
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 145,
        "y": 175
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 141,
        "y": 176
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 134,
        "y": 178
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 130,
        "y": 178
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 126,
        "y": 178
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 124,
        "y": 179
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 118,
        "y": 180
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 111,
        "y": 182
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 96,
        "y": 185
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 86,
        "y": 185
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 79,
        "y": 185
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 72,
        "y": 184
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 67,
        "y": 184
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 66,
        "y": 184
    },
    {
        "time": "11:19:26 GMT+0530 (India Standard Time)",
        "event": "mouse",
        "x": 66,
        "y": 184
    }
]

var x, y;
var px, py;
px = py = 0;

// Image of cursor
var cursor = document.getElementById("cursor");

var mutex = false;

let trackingArr = []

const EVENT_TYPES = {
    CLICK: 'click',
    MOUSE: 'mouse',
    URL: 'url',
    INPUT: 'input'
}

window.onload = startTracking

const _wait = (delay = 200) => new Promise(resolve => setTimeout(resolve, delay))

async function startTracking() {
    // const value = localStorage.getItem('trackingUserDetails')
    // const data = JSON.parse(value)
    // const data = require('./data.json')

    for (let i = 0; i < data.length; i++) {
        const elem = data[i]
        switch (elem.event) {
            case EVENT_TYPES.CLICK:
                const element = document.getElementById(elem.elemId)
                break
            case EVENT_TYPES.MOUSE:
                console.log("moving mouse", elem.pageX)
                cursor.style.left = (px + elem.x) + "px";
                cursor.style.top = (py + elem.y) + "px";

                // for trail
                mouse.x = elem.x;
                mouse.y = elem.y;

                await _wait(50)

                break
            case EVENT_TYPES.INPUT:
                const elementInput = document.getElementById(elem.elemId)
                setTimeout(() => elementInput.value = elem.value, 300)
                await _wait()
                break
            default:
                console.log("doing NOthinf", elem)

        }
    }
}







//  starting Trail
var dots = [],
    mouse = {
        x: 0,
        y: 0
    };

var Dot = function () {
    this.x = 0;
    this.y = 0;
    this.node = (function () {
        var n = document.createElement("div");
        n.className = "trail";
        document.body.appendChild(n);
        return n;
    }());
};

Dot.prototype.draw = function () {
    this.node.style.left = this.x + "px";
    this.node.style.top = this.y + "px";
};

// Creates the Dot objects, populates the dots array
for (var i = 0; i < 12; i++) {
    var d = new Dot();
    dots.push(d);
}

// This is the screen redraw function
function draw() {
    var x = mouse.x,
        y = mouse.y;

    dots.forEach(function (dot, index, dots) {
        var nextDot = dots[index + 1] || dots[0];

        dot.x = x;
        dot.y = y;
        dot.draw();
        x += (nextDot.x - dot.x) * .6;
        y += (nextDot.y - dot.y) * .6;

    });
}




function animate() {
    draw();
    requestAnimationFrame(animate);
}

animate();

