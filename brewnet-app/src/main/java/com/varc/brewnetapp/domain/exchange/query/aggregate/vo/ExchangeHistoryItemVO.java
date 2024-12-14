package com.varc.brewnetapp.domain.exchange.query.aggregate.vo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class ExchangeHistoryItemVO {
    private String itemUniqueCode;  // 상품 고유 코드
    private String itemName;        // 상품명
    private String superCategory;   // 상위 카테고리
    private String subCategory;     // 하위 카테고리
    private int quantity;           // 전체 재고
    private int restockQuantity;    // 재입고 재고
}