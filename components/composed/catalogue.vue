<template lang="">
    <div class="container">
        <div class="row justify-content-center">
            <transition-group name="list">
                <div v-for="(card, index) in rendered" 
                    :class="[selected === card ? 'col-lg-9' : 'col-lg-4 mx-auto']"  
                    :key="index">

                    <nav v-if="selected === card" aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item" aria-current="page"
                                role="button"
                                @click="onClickReadLess">Home</li>
                            <li class="breadcrumb-item active" 
                            aria-current="page"> {{card.title}}</li>
                        </ol>
                    </nav>
                    
                    <div :class="[selected !== card ? 'c-hover':'', 'card overflow-hidden my-3']" 
                        :role="interactive ? 'button': 'navigation'"
                        @click="onClickReadMore(card, index)">
                        <img :src="card.img" class="card-img-top">

                        <div class="card-body">
                            <h4 class="card-title">{{ card.title}}</h4>
                            <p  v-if="selected !== card && interactive" class="card-text"> {{card.content.slice(0, 97) }} ... </p>
                            <p  v-else class="card-text"> {{card.content}} </p>

                            <div v-if="buttons.length > 0">
                                <div :class="'d-flex justify-content-'+ bPosition ">
                                    <div v-for="(button, i) in buttons" :key="i">
                                        <button @click="handleEvent(button.event, card, $event)" class="btn btn-primary mx-3"> {{ button.label}}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition-group>
        </div>
    </div>
</template>
<script>

export default {
    props : {
        cards : {
            type : Array,
            default : ()=> [],
        },
        interactive : {
            type : Boolean,
            default : false,
        },
        buttons : {
            type : Array,
            default :  ()=> []
        },  
        bPosition : {
            type : String,
            default : 'end'
        }
    },

    data(){
        return {
            selected : false,
            scrollPosition : 0,
            currentIndex : 0,
        }
    },
    methods: {
        onClickReadMore(card, index){
            if (!this.interactive){
                return;
            }
            this.currentIndex = index;
            this.scrollPosition = document.documentElement.scrollTop || document.body.scrollTop
            //for transition
            this.switchIndex()
            //select the card
            setTimeout(() => {
                this.selected = card
                window.scrollTo(0, 0);
                }, 50);
        },
        onClickReadLess(event){
            event.stopPropagation();
            if (!this.interactive){
                return;
            }
            this.selected = false;
            this.switchIndex()
            setTimeout(() => {
                window.scrollTo(0, this.scrollPosition);
                }, 60);
        },
        switchIndex(){
            const tmpItem = this.cards[0]
            //switch values
            // eslint-disable-next-line vue/no-mutating-props
            this.cards[0] = this.cards[this.currentIndex];
            // eslint-disable-next-line vue/no-mutating-props
            this.cards[this.currentIndex] = tmpItem
        },
        handleEvent(eventName, card, event){
            event.stopPropagation();
            this.$emit(eventName,card)
        }
    },
    computed : {
        rendered() {
            return !this.selected ? 
                    this.cards : 
                    this.cards.filter( item => item === this.selected)
        },
    },
}
  
</script>
<style lang="css">

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease-in-out;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

.c-hover:hover{
    background-color: #f5f5f5;
}
/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
/**   .list-leave-active {
   position: fixed; 
}*/


</style>