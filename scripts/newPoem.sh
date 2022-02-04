# a shell script to make new poems in the ../poems directory

poemsDir="../poems"

echo Title
read title

echo Date
read date

if [ -d $poemsDir/$date ]; then
  echo $date already exists, exiting...
  exit 1
fi

echo Poem 1
read p1

echo Poem 2
read p2

mkdir $poemsDir/$date

echo ---\\ntitle: $title\\nauthor: 放歌江海山阙\\ndate: $date\\npoem: \|\\n\ \ $p1\\n\\n\ \ $p2\\n---\\n > $poemsDir/$date/index.md

open $poemsDir/$date/index.md
