const RPC = require('discord-rpc');
const client = new RPC.Client({
    transport: 'ipc'
});

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "JOIN eXacts NEW GAME BETA",
            state: "TESTING BY DMING ME OR CLICKING JOIN!",
            timestamps: {
                start: Date.now()
            },
            assets: {
                large_image: "hnet_com-image", // large image key from developer portal > rich presence > art assets
                large_text: ".a"
            },
            buttons: [
                { label: "JOIN", url: "https://discord.gg/fgeHbM95S2" },
            ]
        }
    });
});

client.login({
    clientId: '832901447108263947', // put the client id from the dev portal here
    clientSecret: '6oDGc-i_S6kAHs6s4fr1g2NqgtecDkMi' // put the client secret from the dev portal here
});
