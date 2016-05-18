# service-pw-strength
Password strength estimation as a service.
This service uses [zxcvbn] to calculate the estimation.

## Install

```bash
git clone git@github.com:kr1sp1n/service-pw-strength.git
cd service-pw-strength
npm install
```

## Run

```bash
npm start
```

## Usage

__REQUEST__
```bash
curl -X POST -H "Content-Type: application/json" -d '{ "password": "hello" }' http://localhost:3000/password_strength
```

__RESPONSE__
```json
{
    "result": {
        "password": "hello",
        "guesses": 84,
        "guesses_log10": 1.9242792860618814,
        "sequence": [
            {
                "pattern": "dictionary",
                "i": 0,
                "j": 4,
                "token": "hello",
                "matched_word": "hello",
                "rank": 83,
                "dictionary_name": "passwords",
                "reversed": false,
                "l33t": false,
                "base_guesses": 83,
                "uppercase_variations": 1,
                "l33t_variations": 1,
                "guesses": 83,
                "guesses_log10": 1.919078092376074
            }
        ],
        "calc_time": 1,
        "crack_times_seconds": {
            "online_throttling_100_per_hour": 3024,
            "online_no_throttling_10_per_second": 8.4,
            "offline_slow_hashing_1e4_per_second": 0.0084,
            "offline_fast_hashing_1e10_per_second": 8.4e-9
        },
        "crack_times_display": {
            "online_throttling_100_per_hour": "50 minutes",
            "online_no_throttling_10_per_second": "8 seconds",
            "offline_slow_hashing_1e4_per_second": "less than a second",
            "offline_fast_hashing_1e10_per_second": "less than a second"
        },
        "score": 0,
        "feedback": {
            "warning": "This is a top-100 common password",
            "suggestions": [
                "Add another word or two. Uncommon words are better."
            ]
        }
    }
}
```

See https://github.com/dropbox/zxcvbn#usage for an explanation of the result object.


[zxcvbn]: https://github.com/dropbox/zxcvbn
