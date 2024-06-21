import { notFound } from "next/navigation";

function paramsInt(value: string): number {
    return parseInt(value, 10);
}

export default function ReviewDetail({ params }: { params: { productId: string; reviewId: string; }; }) {
    if (paramsInt(params.reviewId) > 100) {
        notFound();
        return null; // return null để đảm bảo component không render tiếp tục
    }
    return (
        <h1>Review {params.reviewId} for product {params.productId}</h1>
    );
}
