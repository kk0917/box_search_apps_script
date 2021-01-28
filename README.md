## Purpose

...

## Dependency

- PHP7.1~
- MySQL5.7~

## Setup

### Notice

When you exec clasp command, If you add the prefix `yarn run` to it, it works reliably

`> yarn run clasp clone <scriptId> --rootDir ./src`
`> yarn run clasp push`

### Additional files required

**.clasp.json**

```
{
    "scriptId": GOOGLE_FORMS_SCRIPT_ID,
    "rootDir": "./path/to/src",
    "projectId": "GCP_PROJECT_ID"
}
```

**.env**

```
GOOGLE_FORMS_SCRIPT_ID='...'
GCP_PROJECT_ID='...'
```

### Additional folder required

**...**

```
...
```

## Licence

This software is released under the MIT License, see LICENSE.

## Authors

[@kame_greenergy](https://twitter.com/kame_greenergy)