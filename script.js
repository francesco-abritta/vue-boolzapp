let app = new Vue({
    el: "#app",
    data: {
        contattoAttivo: 0,
        chat: 0,
        messInput:"",
        filtroNome: "",
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        tenda: 1
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        tenda: 1
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received',
                        tenda: 1
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        tenda: 1
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        tenda: 1
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe, ma devo andare a fare la spesa.',
                        status: 'sent',
                        tenda: 1
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received',
                        tenda: 1
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        tenda: 1
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received',
                        tenda: 1
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        tenda: 1
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        tenda: 1
                    }
                ],
            },
        ]
    },
    updated: function () {
        this.scroll();
    },
    methods: {
        scroll: function(){
            const blocco = document.querySelector('.chat');
            blocco.scrollTop = blocco.scrollHeight;
        },

        selezionaChat: function(indice){
            this.chat=indice;
            this.contattoAttivo=1;
        },
        
        aggiungi: function(chat){
            if(this.messInput!=''){
                let newMess =
                {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: this.messInput,
                    status: 'sent',
                    tenda: 1
                };
                this.contacts[chat].messages.push(newMess);
                this.messInput="";

    
                let app=this.contacts[this.chat];
                setTimeout(function(){
                    let newMessRec =
                    {
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        text: 'ok',
                        status: 'received',
                        tenda: 1
                    };
                    app.messages.push(newMessRec);
                },1000)
            }
            
        },
        filtraContatti: function(){
            this.contacts.forEach((elemento) => {
                elemento.visible=elemento.name.toLowerCase().includes(this.filtroNome.toLowerCase())
            });
        },
        mostraTendina: function(index, chat){
            this.contacts[chat].messages[index].tenda=!this.contacts[chat].messages[index].tenda;
        },
        elimina: function(index, chat){
            let app=this.contacts[chat].messages;
            app.splice(index,1);
        },
        
    }
},
)



Vue.config.devtools = true;