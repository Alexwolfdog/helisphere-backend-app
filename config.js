module.exports = {
    db: {
        url:''
    },
    user:{
        name: {
            maxLength: 10,
            minLength: 3
        },
        avatar: {
            defaultUrl:"https://robohash.org/sintessequaerat.png?size=50x50&set=set1"
        }
    },
    team: {
        name: {
            maxLength: 10,
            minLength: 3
        },
        description: {
            maxLength: 50,
            minLength: 3
        }
    },
    port:4000,
    cors: {
        origin: [
            'http://localhost:3000',
            'http://localhost:3001',
            'https://86s0767f-3000.inc1.devtunnels.ms',
            'https://helisphere-frontend-3sltowxsc-alexwolfdogs-projects.vercel.app'
        ]
    },
    page: {
        user:{limit: 10,
        //Number of items to send
            default: 10
        },
        team:{
            limit: 4,
            //Number of items to send
            default: 10
        }
    }
}