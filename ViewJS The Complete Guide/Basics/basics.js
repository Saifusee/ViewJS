new Vue
({
    el: "#inp",

    data: 
    {
        name: "Saiful",
        Address: "Ajmer",
        link: "http://google.com",
        Counter: 0,
        x: 0,
        y: 0,
        attachRed: false,
        attachGreen: false,
        attachBlue: false,
        attachOrange: false,
        colo: "orange",
        condn: true,
        persons: 
        [
            {"name": "Khanna", "age": 24, "occupation": "Jobless Khanna"},
            {"name": "Khurana", "age": 34, "occupation": "Acting"},
            {"name": "Karan", "age": 28, "occupation": "Labour"},
            {"name": "Sasha", "age": 22, "occupation": "Nanny"}
        ]
    },
    
    methods:
    {
        showInputAddress(event)
        {
            return this.Address = event.target.value;
        },

        echoName: function()
        {
            return this.name;
        },

        hover(event)
        {
            this.x  = event.clientX;
            this.y  = event.clientY;
        },

        dummy(event)
        {
            event.stopPropagation();
        },

        condnChange()
        {
            this.condn = !this.condn;
        }

    },

    computed:
    {
        color: function()
        {
            return  {
                       red: this.attachRed,
                       blue: !this.attachBlue
                     }
           
        }
    },

    watch:
    {
        Counter: function(value)
        {  $this = this;
            setTimeout(function(){
                $this.Counter = 0;
            },10000)
        }
    }
})