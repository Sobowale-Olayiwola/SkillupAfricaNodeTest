const https = require('https');
const fs = require('fs');
const crypto = require('crypto');
const baseURL = 'https://coderbyte.com/api/challenges/json/age-counting'
let keyArray = [] 
let ageArray = []

function splitString(stringToSplit, separator) {
    const arrayOfStrings = stringToSplit.split(separator)
    return arrayOfStrings
    
  }

https.get(baseURL, (res) => {
    if (res.statusCode !== 200) {
        console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
        res.resume();
        return;
    }
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('close', () => {
        console.log('Retrieved all data');
        let receivedObject = JSON.parse(data);
        let dataValue = Object.values(receivedObject);
        let stringVersion = dataValue.toString()
        let insertedColon = stringVersion.replace( /=/g, ":")
        let removedComma = splitString(insertedColon, ',')
        for (let i = 0; i < removedComma.length; i++) {
            if ( ( i % 2 ) === 0 ) {
                keyArray.push(removedComma[i])
            } else {
                ageArray.push(removedComma[i])
            }
        }
        const index = []
        for (let i = 0; i < ageArray.length; i++) {
            if (ageArray[i] === ' age:32') {
                index.push(i)
            }
        }
        console.log(index)

        let firstKey, secondKey, thirdKey, fourthKey, fifthKey, sixthKey;

        [ firstKey, secondKey , thirdKey, fourthKey, fifthKey, sixthKey ] = [ keyArray[index[0]], keyArray[index[1]], keyArray[index[2]], 
        keyArray[index[3]], keyArray[index[4]], keyArray[index[5]] ];

        console.log(keyArray[index[0]]);

        let firstAge, secondAge, thirdAge, fourthAge, fifthAge, sixthAge

        [firstAge, secondAge, thirdAge, fourthAge, fifthAge, sixthAge] = [ ageArray[index[0]], ageArray[index[1]], ageArray[index[2]], 
        ageArray[index[3]], ageArray[index[4]], ageArray[index[5]] ];

        let items = [
            {
                firstKey, firstAge
            },
            {
                secondKey, secondAge
            },
            {
                thirdKey, thirdAge
            },
            {
                fourthKey, fourthAge
            },
            {
                fifthKey, fifthAge
            },
            {
                sixthKey, sixthAge
            }
        ]

        formattedItems = JSON.stringify(items, null, 2); 
        fs.writeFile('output.txt', formattedItems, (err) => {
            if (err) throw err;
            console.log('File saved');
        });


var getHash = ( content ) => {				
    let hash = crypto.createHash('md5');
    //passing the data to be hashed
    data = hash.update(content, 'utf-8');
    //Creating the hash in the required format
    gen_hash= data.digest('hex');
    return gen_hash;
}
//Creating a readstream to read the file
let myReadStream = fs.createReadStream(__dirname+'/output.txt');
let rContents = '' // to hold the read contents;
myReadStream.on('data', function(chunk) {
		rContents += chunk;
});
myReadStream.on('error', function(err){
		console.log(err);
});
myReadStream.on('end',function(){
		//Calling the getHash() function to get the hash
		let content = getHash(rContents) ;
		console.log('Content : ' + rContents);
		console.log('Hash : ' + content);
});
        
    })
})

