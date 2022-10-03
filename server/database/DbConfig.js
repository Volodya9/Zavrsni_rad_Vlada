//Create connection
const config = {    
    database:'FantasyWC',
    server:'CHIP-126-LP\\SQLEXPRESS',
    driver:'msnodesqlv8',
    options:{
        trustedConnection: true
    }
};

exports.config = config;