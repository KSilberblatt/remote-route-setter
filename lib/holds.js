
let handHoldImgs = [
  "https://i.imgur.com/MzqxIK4.png",
  "https://i.imgur.com/C6EXmSl.png",
  "https://i.imgur.com/o1OlWwm.png",
  "https://i.imgur.com/87EwAus.png",
  "https://i.imgur.com/tumD9jA.png",
  "https://i.imgur.com/NjDCTYC.png",
  "https://i.imgur.com/Rp5bBgF.png",
  "https://i.imgur.com/qwvGTLM.png",
  "https://i.imgur.com/8hjPxHP.png",
  "https://i.imgur.com/rKOdHEW.png",
  "https://i.imgur.com/wVa8t1M.png",
  "https://i.imgur.com/CTZD4n2.png",
  "https://i.imgur.com/ii5VVSn.png",
  "https://i.imgur.com/EECtf2S.png",
  "https://i.imgur.com/PZeFB21.png",
  "https://i.imgur.com/MogL5OQ.png",
  "https://i.imgur.com/xs8owyQ.png",
  "https://i.imgur.com/QTYAY83.png",
  "https://i.imgur.com/3MaLZsf.png",
  "https://i.imgur.com/RJebp47.png",
  "https://i.imgur.com/zfpcgqx.png",
  "https://i.imgur.com/YiKU3jg.png"];

let footHoldImgs = [
  "https://i.imgur.com/CmtJTtQ.png",
  "https://i.imgur.com/o2eAepF.png",
  "https://i.imgur.com/tptkO5e.png",
  "https://i.imgur.com/cMf1BeQ.png",
  "https://i.imgur.com/iDXvb64.png",
  "https://i.imgur.com/RBbZG6z.png",
  "https://i.imgur.com/xE9nrFl.png",
  "https://i.imgur.com/GpFQ0fG.png",
  "https://i.imgur.com/50kRztL.png",
  "https://i.imgur.com/H8TWyPZ.png",
  "https://i.imgur.com/mqvwmJG.png",
  "https://i.imgur.com/kC5G2Tg.png",
  "https://i.imgur.com/jf2xn1i.png",
  "https://i.imgur.com/SxkjuEv.png",
  "https://i.imgur.com/6tv9dEl.png",
  "https://i.imgur.com/ae7sNJa.png",
  "https://i.imgur.com/h2vr96S.png",
  "https://i.imgur.com/nUswe2Y.png",
  "https://i.imgur.com/37AjGtH.png",
  "https://i.imgur.com/BPGrXVJ.png",
  "https://i.imgur.com/bFfnGGk.png"];

const renderHandHolds = () => {
  return (
    <div>
      handHoldImgs.map((imgSrc, idx) => (
        <img
          key={`hand${idx}`}
          src={`${src}`}
          class='hold'
          alt='0'
          name={`hand${idx}`}
          id={`hand${idx}`} />
      ))
    </div>
  );
};

const renderFootHolds = () => {
  return (
    <div>
      footHoldImgs.map((imgSrc, idx) => (
        <img
          key={`foot${idx}`}
          src={`${src}`}
          class='hold'
          alt='0'
          name={`foot${idx}`}
          id={`foot${idx}`} />
      ))
    </div>
  );
};
