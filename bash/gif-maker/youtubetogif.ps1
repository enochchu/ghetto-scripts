$YOUTUBE_ID = $args[0]
$START_TIME = $args[1]
$LENGTH = $args[2]

echo "Download Youtube Video"
$YOUTUBE_CMD = "youtube-dl-f mp4 -o '%(id)s.%(ext)s' $YOUTUBE_ID"
iex $YOUTUBE_CMD

echo "Convert with ffmpeg"
$FFMPEG_CMD = "ffmpeg -ss $START_TIME -i $YOUTUBE_ID.mp4 -pix_fmt rgb24 -r 100 -s 800x600 -t $LENGTH $YOUTUBE_ID.gif"
iex $FFMPEG_CMD