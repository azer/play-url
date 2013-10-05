fox = bin 'fox'

all 'test'

task 'test', 'lib', 'index.js', 'test', ->
  fox '-b -t 10000'
