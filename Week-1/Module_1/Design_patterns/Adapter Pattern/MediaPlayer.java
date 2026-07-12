public interface MediaPlayer {
    void play(String audioType, String fileName);

    public interface AdvancedMediaPlayer {

    void playMp4(String fileName);

    void playVlc(String fileName);
}
public class Mp4Player implements AdvancedMediaPlayer {

    public void playMp4(String fileName) {
        System.out.println("Playing mp4: " + fileName);
    }

    public void playVlc(String fileName) {}
}
public class MediaAdapter implements MediaPlayer {

    AdvancedMediaPlayer advancedPlayer;

    public MediaAdapter(String audioType) {

        if(audioType.equalsIgnoreCase("mp4"))
            advancedPlayer = new Mp4Player();
    }

    public void play(String audioType, String fileName) {

        if(audioType.equalsIgnoreCase("mp4"))
            advancedPlayer.playMp4(fileName);
    }
}
public class AudioPlayer implements MediaPlayer {

    MediaAdapter adapter;

    public void play(String audioType, String fileName) {

        if(audioType.equalsIgnoreCase("mp3"))
            System.out.println("Playing mp3: " + fileName);

        else {

            adapter = new MediaAdapter(audioType);
            adapter.play(audioType,fileName);
        }
    }
}
public class Main {

    public static void main(String[] args) {

        AudioPlayer player = new AudioPlayer();

        player.play("mp3","song.mp3");
        player.play("mp4","video.mp4");
    }
}
}