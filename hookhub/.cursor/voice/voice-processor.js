class VoiceProcessor extends AudioWorkletProcessor {
  process(inputs) {
    const input = inputs[0];
    if (!input || !input[0]) {
      return true;
    }

    const channelData = input[0];
    const pcm16 = new Int16Array(channelData.length);

    for (let i = 0; i < channelData.length; i++) {
      const sample = Math.max(-1, Math.min(1, channelData[i]));
      pcm16[i] = sample < 0 ? sample * 32768 : sample * 32767;
    }

    const bytes = new Uint8Array(pcm16.buffer);
    this.port.postMessage(bytes.buffer, [bytes.buffer]);
    return true;
  }
}

registerProcessor("voice-processor", VoiceProcessor);
