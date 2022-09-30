// Using the tool regex101
// Select Javascript ( its default on PHP )

// 1.0 flags
string = "ninja ninja"
regex = /ninja/ // default, will select only one occurrence 
regex2 = /ninja/g // global, will select all occurences

// 1.1
string = 'ninja ninja Ninja'
regex = /ninja/gi // i, is insensitive, and will catch the element no matter upper/lower cases

// 2.0 characeters set
string = "ninja ninja ginja nginja" 
regex = /[n]inja/ // will select only ninjas
regex = /[ng]inja/ // will select both ninjas and ginja
// nginja will not be select, the character set look a n or g only on 1st character

// 2.1 larger character set
string = "ab3e"
regex = /[abc123]/ // everything will match except for "e"

string = "a000 c000 2000 e000" 
regex = /[abc123]000/ // will catch anything from a to 3 BEFORE bunch of zeros
// e000 will of course not be caught

// 2.2 exclude set, match all chars except 1 or 2 chars
string = "a000 c000 2000 e000" 
regex = /[^pe2]000/ // I will match BUT NOT "p OR e OR 2"
// very cool

// 3.0 ranges, exemple catching all letters from the alphabet
string = 'ninja winja'
regex = /[a-nA-N]inja/ // will obviously not catch the "w OR W"

// 3.1 ranges with numbers 
string = '0inja 6inja'
regex = /[5-9]ninja/ // obviously one will not be catched with such a range

// 4.0 ranges more complex
string = '1212121222'
// if we place after this range, a + sign
regex = /[0-9]+/ // will make the [0-9] repeat
// + Quantifier - Matches between ONE and UNLIMITED

// 4.1 how long we want this particular char set to repeat
regex = /[0-9]{11}/ // exact amount of times to repeat this char set
string = '12345678912'

// 4.2 can also do that with words
string = 'ninja hello'
regex = /[a-z]{5}/ // will catch everything from a to z and match if it's 5 times.
// but it will also repeat, and return both "ninja & hello" because this thing repeats

// 4.3 more depth
regex = /[a-z]{5,8}/ // 5,6,7,8 word.length will match, for this char set ofc
regex = /[a-z]{5,8}/ // 5+ word.length will match


// 5.0 meta characters : characters with specials meanings
// most commons ones are 
// \d : match any digit char ( same as [0-9])
// \w : match any word char ( a-z, A-Z, 0-9 and _'s)
// \s : match a whitespace char ( spaces, tabs etc )
// \t : match a tab char only
// d : match the literal char, 'd'
// \d : match any digit // kinda lame to repeat but hopefully less confusing this way

string = '1233'
regex = /\d/ // will catch only one digit

regex = /\d\s\w+/ // had to add + else it was "1 d"
valid - string = '1 digitlol'

regex = /\d{3}\s\w{5}/
valid - string = "666 killa" // digit nb3, word nb5, seemsgood 
false - string = "666 legolas" // will match for this "666 legol" and return false
false - string = "666  legolas" // two spaces lmao, false


// 6.0 Special characters 
// easy ones
// '+' : The one or more quantifier ( times )
// '\' : the escape character
// '[]' : the character set
// '[^]' : the negate symbol in a char set, simply the opposite of []

// new ones 
// '?' : The zero or one quantifier ( makes a preceding char optionnal )
// '.' : Any character whatsoever ( except the newline character)
// '*' : The 0 or more quantifier ( a bit like + )

// 6.1 optionnal
let string = 'hll'
regex = /he?llo?/ // the "e" & "o" are optionnal

let string = "a"
regex = /a[a-z]?/ // return true because [a-z] is optionnal

// 6.2 dot "."
let string = 'car'
regex = /car./ // returns nothing
let string = 'card'
let string = 'car_'
regex = /car./ // returns match

// dot is really powerful
string = "aijifjiezjfizjeifjizejf"
regex = /.+/ // will catch anything +

// 6.3 star symbol "*"
string = 'a'
regex = /a[a-z]*/ // its a match cause it can appears 0 times or more, means its optionnal
string = 'aefaahthtrhtrhrthrthrthrth'
regex = /a[a-z]*/ // will still match no matters the nb of letters we do
string = 'aefaahthtrhtrhrthrthrthrth532532'
regex = /a[a-z]*/ // will not be a match, numbers ARE NOT in range, but will select all chars non digits

// escape default behavior from the regex 
// if you're looking for a *
string = "abc*"
regex = /abc\*/ // will match .. !

// 7 start and end regular expressions
// start and end paterns
// exemple with lookin at for 5 exact characters 
string = 'ninjajajajfezfppzeofezf'
let regex = /[a-z]{5}/ // it will match every word each 5 letters, not that good 
// but when we remove the /g, then we get only one, so it's better
// but no because I dont want a match when there is MORE than 5 letters.

// we must say, our char range must have a start and an ending
// start patern
let regex = /^[a-z]{5}/ // the carrot "^" has a different meaning outside of the char set

// ending patern
let regex = /^[a-z]{5}$/ // the "$" means our char must set also be the ending
// means if there is more than 5, we cannot match

// 8.0 alternate character "|" just like ||
let string = "pyre tyre"
let regex = /[pyre-tyre]/ // will match either of those two words

let string = "pyre tyre"
let reger = /(p|t)yre/ // will match both

let string "pet rabbit toy rabbit crazy rabbit hello rabbit"
let regex = /(pet|toy|crazy)? rabbit/
// will catch eventually one of those 3 key words, BUT there are also optionnal 

^.{5,12}$