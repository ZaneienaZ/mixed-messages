//return a random message. Fortune teller



//1. User types sends input



//2. randomly selects three part string
    //a. what string parts

    //b. where do strings come from
    
    //c. how to showcase JS concepts



//3. response is returned to console

//defining the arrays of elements to be called randomly
let nouns = ['octopus']//['stocking','frogs','orange','thought','zebra','watch','trail','vacation','stream','ball','quiver','edge','snakes','thumb','request','battle','party','stranger','furniture','wealth','sleet','volcano','invention','connection','waves','iron','liquid','ducks','sneeze','silver','train','juice','temper','steam','wash','sign','wind','group','limit','fireman','middle','death','potato','bells','arithmetic','apparel','zephyr','offer','motion','smash','rice','jar','flower','insurance','border','needle','cover','desk','sock','mine','church','sand','impulse','gun','scale','bead','position','mist','name','laugh','tank','argument','moon','ocean','point','river','straw','meeting','coast','dinner','wren','surprise','rat','jam','men','teaching','riddle','design','animal','competition','test','flock','increase','swing','verse','country','cellar','meal','man','grip','field','skirt','jelly','detail','plastic','soap','shelf','tub','winter','history','powder','way','lunch','discovery','suit','wish','play','mountain','gate','leg','treatment','kiss','move','pancake','army','grain','fork','wheel','wrist','car','cheese','reaction','sidewalk','twist','profit','mailbox','yam','popcorn','birds','care','smell','coil','vegetable','caption','apparatus','loss','advice','beginner','vest','sofa','rabbits','spark','thread','wing','stew','lake','use','board','harbor','hat','land','kick','reward','pie','holiday','drain','part','snow','throne','road','cub','knot','vase','respect','turkey','company','throat','jeans','attack','creator','actor','berry','believe','sleep','steel','calendar','stem','nest','language','shake','box','pot','fear','plate','pickle','cactus','vessel','market','women','industry','snail','page','attraction','bike','pump','tiger','nerve','hydrant','friction','cook','sort','snake','sheep','queen','brake','quilt','leather','belief','balance','end','string','acoustics','magic','skate','window','cracker','guitar','hill','porter','notebook','hands','truck','lace','rod','spiders','color','cakes','grape','letters','copper','title','door','measure','sail','afternoon','baseball','wilderness','silk','bag','basketball','ear','adjustment','cough','grandmother','direction','lumber','account','exchange','glove','income','experience','cent','weather','shoes','knowledge','hour','stone','credit','fang','head','love','hot','event','toothpaste','teeth','step','mind','corn','rings','milk','water','level','dogs','angle','smoke','feeling','instrument','cart','voice','activity','oatmeal','sense','distribution','railway','distance','pencil','decision','tail','join','scissors','bait','zinc','statement','driving','tent','neck','crime','calculator','fruit','son','regret','word','push','house','plough','jellyfish','wire','front','grade','dinosaurs','dock','friend','gold','egg','night','parcel','bushes','note','shirt','metal','religion','deer','agreement','minute','laborer','hobbies','appliance','peace','salt','crook','mark','change','memory','division','shoe','form','uncle','crowd','hall','tin','writer','doll','rail','judge','kitty','pig','letter','pigs','base','swim','home','trade','hammer','cream','relation','side','quarter','trick','quince','face','taste','boundary','toys','muscle','substance','boat','book','rhythm','representative','duck','expert','anger','coal','force','carpenter','finger','eye','air','dog','trees','circle','plantation','ghost','monkey','dad','tray','arm','roll','earth','chance','look','fall','debt','spring','pizzas','robin','boy','cows','receipt','shock','flavor','scent','chin','scarecrow','slave','year','back','ground','rest','icicle','hose','war','trouble','underwear','knee','mask','current','plot','system','knife','aunt','sky','wrench','support','chicken','brass','record','purpose','girls','cats','spade','frame','fog','legs','waste','unit','power','day','cemetery','stretch','insect','dust','view','thrill','song','drink','stop','marble','ice','minister','scarf','doctor','horn','shade','store','trip','snails','texture','governor','airport','pest','morning','cherries','summer','humor','government','destruction','coach','carriage','act','food','root','dress','daughter','giants','error','quartz','bell','turn','bath','sweater','babies','lamp','library','partner','crown','size','visitor','seashore','toy']
let  adverbs = ['only','arrogantly','suspiciously','specifically','safely','wonderfully','commonly','lively','delightfully','quickly','terrifically','coolly','furiously','slightly','terribly','blindly','mockingly','sedately','deeply','bashfully','crazily','upbeat','crossly','closely','shakily','gracefully','basically','courageously','eventually','usefully','upwardly','willfully','elegantly','clearly','unnaturally','quaintly','energetically','sternly','truly','tenderly','kissingly','vastly','jubilantly','upliftingly','finally','woefully','stealthily','faithfully','perfectly','yieldingly','tomorrow','poorly','recently','gratefully','tediously','sometimes','successfully','absentmindedly','nervously','fully','technically','coaxingly','yearningly','helplessly','needily','therefore','acidly','highly','keenly','sadly','literally','offensively','painfully','vainly','physically','gently','reassuringly','widely','dutifully','openly','repeatedly','upside-down','twice','cleverly','tightly','loftily','joshingly','correctly','zealously','exactly','silently','mainly','meaningfully','freely','instantly','victoriously','unbearably','vivaciously','primarily','occasionally','almost','bitterly','limply','unethically','generously','uselessly','automatically','seemingly','lovingly','jaggedly','interestingly','somewhat','selfishly','viciously','significantly','devotedly','solidly','properly','vaguely','everywhere','originally','naturally','honestly','seldom','even','upward','knavishly','shyly','effectively','generally','valiantly','justly','rapidly','miserably','fairly','simply','gleefully','thoughtfully','afterwards','frenetically','urgently','annually','deftly','ultimately','far','currently','colorfully','righteously','roughly','soon','elsewhere','ahead','questioningly','eagerly','frightfully','easily','quicker','queasily','tremendously','briefly','potentially','quirkily','usually','also','completely','zestfully','enormously','weakly','wisely','mechanically','monthly','noisily','cheerfully','hopefully','dimly','deceivingly','bleakly','directly','unnecessarily','readily','very','worriedly','hopelessly','shrilly','certainly','innocently','restfully','kookily','truthfully','rudely','dramatically','softly','inquisitively','surprisingly','carelessly','fortunately','continually','utterly','regularly','anyway','obediently','strongly','yesterday','verbally','intently','partially','angrily','merrily','heavily','reproachfully','mostly','thankfully','nicely','zestily','rather','normally','adventurously','too','equally','joyously','oddly','swiftly','thus','yearly','unabashedly','defiantly','hourly','dearly','joyfully','famously','solemnly','loosely','frantically','anxiously','sympathetically','awkwardly','altogether','happily','smoothly','helpfully','less','below','beautifully','wholly','jovially','mysteriously','greedily','weekly','virtually','quizzically','unimpressively','searchingly','rigidly','unaccountably','owlishly','positively','suddenly','deliberately','warmly','excitedly','calmly','necessarily','queerly','questionably','immediately','longingly','initially','healthily','broadly','playfully','totally','more','badly','fiercely','jealously','knowingly','greatly','kindly','steadily','voluntarily','hungrily','triumphantly','personally','violently','tensely','extremely','thoroughly','wetly','actually','fatally','carefully','knowledgeably','dreamily','overconfidently','separately','politely','always','patiently','speedily','accidentally','gladly','sleepily','really','wildly','instead','seriously','kiddingly','possibly','unexpectedly','again','definitely','boastfully','quietly','mortally','else','never','youthfully','blissfully','ferociously','majestically','wrongly','essentially','fast','vacantly','neatly','early','ever','similarly','probably','intensely','cautiously','frequently','hastily','well','nearly','loyally','diligently','yawningly','slowly','frankly','briskly','boldly','often','officially','enthusiastically','inwardly','punctually','strictly','constantly','fondly','recklessly','promptly','sweetly','foolishly','kindheartedly','abnormally','daily','rarely','relatively','brightly','reluctantly','then','quarrelsomely','hardly','cruelly','merely','daintily','bravely','however','likely','evenly','together','especially','rightfully','madly','irritably','sheepishly','busily','previously','upright','curiously','doubtfully','lazily','judgementally','moreover','fervently','scarily','loudly','optimistically','sharply','not','unfortunately','knottily','wearily','already','powerfully','coyly','lightly','forth','obnoxiously','scarcely']
let adjectives = ['roomy','furtive','demonic','gabby','trashy','grieving','fabulous','well-made','violet','white','tedious','three','separate','sticky','real','fertile','lovely','lamentable','familiar','possible','tired','voracious','vague','sordid','selfish','unequaled','far','puzzling','sassy','jumpy','adjoining','abnormal','irate','clean','dazzling','ashamed','heavenly','present','meek','oval','sweltering','flimsy','aboard','bent','oceanic','equable','brief','cold','torpid','fearless','living','amusing','sharp','spiky','overconfident','next','disturbed','puzzled','full','panicky','offbeat','breakable','wicked','scientific','slippery','quirky','near','languid','secretive','better','witty','classy','fragile','tenuous','ugly','anxious','ultra','silent','beneficial','rabid','vengeful','crowded','unique','juvenile','quack','bite-sized','didactic','scintillating','abashed','magnificent','unruly','abusive','shocking','depressed','delightful','tense','drunk','satisfying','dramatic','energetic','materialistic','cuddly','faint','acoustic','arrogant','defiant','hurt','green','future','chemical','unarmed','average','wistful','shy','dysfunctional','acid','tranquil','distinct','gentle','axiomatic','penitent','cloudy','ancient','aberrant','material','majestic','perfect','nutty','accessible','fixed','jobless','opposite','utopian','alleged','tightfisted','bustling','annoyed','glib','quick','halting','alcoholic','happy','wrong','subsequent','frequent','wide-eyed','little','rapid','long','wiry','productive','deserted','highfalutin','important','noiseless','plastic','awake','gullible','lewd','dashing','good','black-and-white','futuristic','excellent','inquisitive','frightening','unhealthy','joyous','fresh','murky','grateful','colorful','voiceless','alert','best','uttermost','shaky','parched','proud','rebel','past','second-hand','foregoing','functional','electric','late','ripe','dusty','snobbish','woebegone','agreeable','peaceful','idiotic','woozy','tan','four','perpetual','adamant','brainy','addicted','repulsive','onerous','various','substantial','chivalrous','guiltless','phobic','sturdy','luxuriant','rare','boiling','bashful','earsplitting','tame','impartial','well-groomed','miscreant','high','cooperative','inconclusive','honorable','melted','wet','mean','hard','unbiased','psychedelic','labored','rude','somber','tender','draconian','savory','recondite','purring','gorgeous','first','cowardly','cynical','tiresome','alike','flaky','crooked','absorbing','rampant','careless','coordinated','statuesque','invincible','misty','massive','clever','supreme','aback','understood','groovy','fuzzy','wry','superb','gaping','changeable','periodic','bizarre','vigorous','versed','general','blue-eyed','piquant','berserk','robust','flawless','short','lackadaisical','disgusted','gainful','nice','erect','noxious','snotty','deeply','third','great','efficacious','grandiose','awesome','soggy','breezy','testy','daffy','irritating','helpless','measly','pale','impolite','fanatical','plucky','illustrious','huge','purple','terrible']
let prepo = ['onto','unlike','of','in','per','towards','despite','for','anti','plus','aboard','round','but','below','than','under','outside','into','without','beside','amid','save','opposite','about','concerning','except','minus','past','off','after','inside','along','following','before','near','up','around','by','versus','since','toward','against','excluding','upon','beneath','during','as','over','regarding','on','beyond','via','considering','at','through','besides','underneath','above','down','within','excepting','until','from','across','behind','among','between','with','like','to']
//adding iteration to the random function for high pseudo-randomness
let iteration = 0
let choosenWord;

//grammar corrects for the first word
grammar = (_Word) => {

    //in future version I would like to use a switch
/*
    switch(_Word) {
        case _Word.endsWith('y'):
            _Word = _Word.slice(0, choosenWord.length-1);
            _Word = _Word.concat('ies');
            console.log(_Word)
            choosenWord = _Word;
            return _Word
            break;
         case _Word.endsWith('en')||_Word.endsWith('s'):
             choosenWord = _Word;
             return choosenWord
             break;
        default:
            _Word = _Word.concat('s')

    }*/

    if(choosenWord.endsWith('y')){
        _Word = _Word.slice(0, choosenWord.length-1);
        _Word = _Word.concat('ies');
        choosenWord = _Word;
    } else if(_Word.endsWith('us')){  
        _Word = _Word.slice(0, choosenWord.length-2);
        _Word = _Word.concat('i');
        choosenWord =_Word;          
    }else if(_Word.endsWith('en')||_Word.endsWith('s')){
        choosenWord = _Word; 
    }else {
        _Word = _Word.concat('s');
        choosenWord = _Word
    }

    return choosenWord
}


// ran function takes in array as an argument and returns random
//word element. ie(noun, verb, adverb, preposition)
let ran = (word) => {
    //randomizing section
    let rando = Math.floor(Math.random()*word.length);
    rando+= Math.floor(Math.random()*iteration);

    choosenWord = word[rando]
    //let n = choosenWord.length
    //let lastLetter = n-1
    //grammar
    if( iteration===0 ) {
        grammar(choosenWord);
    } 
    iteration++


        //need to figure out why choosenWord doesn't change
    if (iteration>0){
    return choosenWord
    }
};

//grabs constant integer less than 1000
const number = Math.floor(Math.random()*1000);

//main function, stringa a series of random words together, madlib style
//in order to generated a random fortune with matching lucky number.
const tellMeMyFortune = () => {
    let fortune = `There has been many ${ran(nouns)} in your life.
     All of that will ${ran(adverbs)} change with a coming new ${ran(nouns)}. 
     I see a ${ran(adjectives)} ${ran(nouns)} in your future. 
     Beware of ${ran(nouns)} ${ran(prepo)} the ${ran(nouns)}. ${number} is your lucky number.
     `
    return fortune
};


module.exports = tellMeMyFortune;

//Delim.co
//randomlists.com