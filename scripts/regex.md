RegEx search patterns to replace the date using `.` with `-`.

## Replace 2022.1.1 (yyyy.m.d) with yyyy-mm-dd

RegEx search:

```
(\d{4})\.(\d{1})\.(\d{1})$
```

Replace with:

```
$1-0$2-0$3
```

## Replace 2022.1.11 (yyyy.m.dd) with yyyy-mm-dd

RegEx search:

```
(\d{4})\.(\d{1})\.(\d{2})$
```

Replace with:

```
$1-0$2-$3
```

## Replace 2022.11.1 (yyyy.mm.d) with yyyy-mm-dd

RegEx search:

```
(\d{4})\.(\d{2})\.(\d{1})$
```

Replace with:

```
$1-$2-0$3
```

## Replace 2022.11.11 (yyyy.mm.dd) with yyyy-mm-dd

RegEx search:

```
(\d{4})\.(\d{2})\.(\d{2})$
```

Replace with:

```
$1-$2-$3
```

## Replace 字.字 with 字·字

But not for `1.1`.

RegEx search:

```
([^\d])(\.)([^\d])
```

Replace with:

```
$1·$3
```
