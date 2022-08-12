from rest_framework import serializers
from .models import Song

class SongSerializer(serializers.ModelSerializer):
    class met:
        model = Song
        fields = ('id', 'title', 'artist', 'album', 'realse_date', 'genre')
        