import * as types from './mutation-types'

const matutaions = {
	[types.SET_SINGER](state,singer){
		state.singer = singer
	},
	[types.SET_PLAYING](state,flag){
		state.playing = flag
	},
	[types.SET_FULLSCREEN](state,flag){
		state.fullScreen = flag
	},
	[types.SET_PLAYLIST](state,list){
		state.playList = list
	},
	[types.SET_SEQUENCELIST](state,list){
		state.sequenceList = list
	},
	[types.SET_MODE](state,mode){
		state.mode = mode
	},
	[types.SET_CURRENTINDEX](state,index){
		state.currentIndex = index
	}
}
export default matutaions;