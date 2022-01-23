RegEx search patterns to replace the date using `.` with `-`.

## Replace 2022.1.1 (dddd.d.d)

Search for:

```
(\d{4})\.(\d{1})\.(\d{1})$
```

Replace with:

```
$1-0$2-0$3
```

## Replace 2022.1.11 (dddd.d.dd)

```
(\d{4})\.(\d{1})\.(\d{2})$
```

Replace with:

```
$1-0$2-$3
```

## Replace 2022.11.1 (dddd.d.dd)

```
(\d{4})\.(\d{2})\.(\d{1})$
```

Replace with:

```
$1-$2-0$3
```

## Replace 2022.11.11 (dddd.dd.dd)

```
(\d{4})\.(\d{2})\.(\d{2})$
```

Replace with:

```
$1-$2-$3
```
