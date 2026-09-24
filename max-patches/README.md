# Selected Max patches

Source files for three projects featured on [Drew Dale's portfolio](https://drewedale.github.io/audio-coding.html). Open `.maxpat` files in Cycling '74 Max. The downloadable ZIPs on the portfolio contain the same selected patch files.

| Project | Start here | What it does |
| --- | --- | --- |
| [The Kinected DJ](kinected-dj/) | [`kinectDJ.maxpat`](kinected-dj/kinectDJ.maxpat) | Maps Kinect body tracking to DJ effect controls. |
| [MIDI synthesizer](midi-synthesizer/) | [`Drew_Dale_MIDI_Synthesizer.maxpat`](midi-synthesizer/Drew_Dale_MIDI_Synthesizer.maxpat) | A MIDI instrument with waveform, envelope, modulation, and chord controls. |
| [Fauna of Mirrors III](fauna-of-mirrors-iii/) | [`MaxPatch.maxpat`](fauna-of-mirrors-iii/MaxPatch.maxpat) | Routes stereo tape and click cues to separate performance outputs. |

## Requirements and limits

- **Kinected DJ:** Keep all files in `kinected-dj/` together. The original rig used an Xbox Kinect, KinectV2-OSC, Max, Rekordbox, a DDJ-400, and configured audio routing. Calibrate tracking before a performance. Some effect modules refer to additional packages or have external origins. See the [project paper](https://drewedale.github.io/assets/kinected-dj-paper.pdf) for the system design.
- **MIDI synthesizer:** Open the single patch, enable DSP, and connect a MIDI input. The subpatchers and generated wave tables are embedded.
- **Fauna of Mirrors III:** Supply the original `Tape.wav` and `Metro_Stereo.wav` audio files, relink them in the two `playlist~` objects, and use a multichannel audio interface. The WAVs are not included. The patch routes tape to outputs 1–2 and click cues to outputs 3–7. File references here use relative filenames rather than the original machine's paths.

These are historical project sources, reviewed as Max patch data but not tested on the original hardware or performance rigs. In particular, the Kinected DJ collection includes effect modules with unverified external licensing; this repository does not assert authorship of every included module or grant a blanket reuse license for them.
