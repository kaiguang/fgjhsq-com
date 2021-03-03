# a shell script to make new poems in the current directory

echo Title
read title

echo Date
read date

if [ -d ./$date ]; then
  echo $date already exists, exiting...
  exit 1
fi

echo Poem 1
read p1

echo Poem 2
read p2

mkdir ./$date

echo ---\\ntitle: $title\\nauthor: 放歌江海山阙\\ndate: $date\\npoem: \|\\n\ \ $p1\\n\\n\ \ $p2\\n---\\n > ./$date/index.md

open ./$date/index.md
