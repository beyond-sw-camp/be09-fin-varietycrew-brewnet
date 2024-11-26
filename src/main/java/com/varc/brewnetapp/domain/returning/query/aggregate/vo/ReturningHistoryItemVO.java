package com.varc.brewnetapp.domain.returning.query.aggregate.vo;

public class ReturningHistoryItemVO { // 진행중
    private String itemUniqueCode;  // 상품 고유 코드
    private String itemName;        // 상품명
    private String superCategory;   // 상위 카테고리
    private String subCategory;     // 하위 카테고리
    private int quantity;           // 환불액
    private int restockQuantity;    // 재입고 재고
}
