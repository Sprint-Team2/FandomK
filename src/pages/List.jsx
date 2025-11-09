import { Modal } from "@/components/Modal";
import { RechargeModalContent } from "@/components/RechargeModalContent";
import { useState } from "react";

function List() {
  const [showRechargeModal, setShowRechargeModal] = useState(true);

  return (
    <>
      <Modal
        title="크레딧 충전하기"
        isOpen={showRechargeModal}
        onClose={() => setShowRechargeModal(false)}
      >
        <RechargeModalContent onClose={() => setShowRechargeModal(false)} />
      </Modal>
    </>
  );
}

export default List;
