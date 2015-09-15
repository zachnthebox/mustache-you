import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addSong: function(song) {
			var album = this.store.createRecord("album", {
				title: song.album,
				artist: song.artist
			});
			var songRecord = this.store.createRecord("song", {
				title: song.title,
				artist: song.artist,
				album: album,
			});

			album.get("songs").pushObject(songRecord);

			album.save();
			songRecord.save();
		},
		removeSong: function(song) {
			song.deleteRecord();
			song.save();
		}
	}
});
