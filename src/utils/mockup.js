// 임직원
function makeMockEmployee(code, name, id, email, contact, position, role) {
  return { code, name, id, email, contact, position, role };
}
export const mockupEmployees = [
  makeMockEmployee(100, '홍길동', 'BN001', 'gdhong@bn.com', '010-1111-1111', 'STAFF', 'ROLE_MASTER'),
  makeMockEmployee(101, '홍길동', 'BN001', 'gdhong@bn.com', '010-1111-1111', 'STAFF', 'ROLE_MASTER'),
  makeMockEmployee(102, '홍길동', 'BN001', 'gdhong@bn.com', '010-1111-1111', 'STAFF', 'ROLE_MASTER'),
  makeMockEmployee(103, '홍길동', 'BN001', 'gdhong@bn.com', '010-1111-1111', 'STAFF', 'ROLE_MASTER'),
  makeMockEmployee(104, '홍길동', 'BN001', 'gdhong@bn.com', '010-1111-1111', 'STAFF', 'ROLE_MASTER'),
  makeMockEmployee(105, '홍길동', 'BN001', 'gdhong@bn.com', '010-1111-1111', 'STAFF', 'ROLE_MASTER'),
  makeMockEmployee(106, '홍길동', 'BN001', 'gdhong@bn.com', '010-1111-1111', 'STAFF', 'ROLE_MASTER'),
  makeMockEmployee(107, '홍길동', 'BN001', 'gdhong@bn.com', '010-1111-1111', 'STAFF', 'ROLE_MASTER'),
  makeMockEmployee(108, '홍길동', 'BN001', 'gdhong@bn.com', '010-1111-1111', 'STAFF', 'ROLE_MASTER'),
  makeMockEmployee(109, '홍길동', 'BN001', 'gdhong@bn.com', '010-1111-1111', 'STAFF', 'ROLE_MASTER'),
  makeMockEmployee(110, '홍길동', 'BN001', 'gdhong@bn.com', '010-1111-1111', 'STAFF', 'ROLE_GENERAL_ADMIN'),
  makeMockEmployee(111, '홍길동', 'BN001', 'gdhong@bn.com', '010-1111-1111', 'STAFF', 'ROLE_GENERAL_ADMIN'),
  makeMockEmployee(112, '홍길동', 'BN001', 'gdhong@bn.com', '010-1111-1111', 'STAFF', 'ROLE_GENERAL_ADMIN'),
  makeMockEmployee(113, '홍길동', 'BN001', 'gdhong@bn.com', '010-1111-1111', 'MANAGER', 'ROLE_GENERAL_ADMIN'),
  makeMockEmployee(114, '홍길동', 'BN001', 'gdhong@bn.com', '010-1111-1111', 'MANAGER', 'ROLE_GENERAL_ADMIN'),
  makeMockEmployee(115, '홍길동', 'BN001', 'gdhong@bn.com', '010-1111-1111', 'MANAGER', 'ROLE_GENERAL_ADMIN'),
  makeMockEmployee(116, '홍길동', 'BN001', 'gdhong@bn.com', '010-1111-1111', 'MANAGER', 'ROLE_GENERAL_ADMIN'),
  makeMockEmployee(117, '홍길동', 'BN001', 'gdhong@bn.com', '010-1111-1111', 'MANAGER', 'ROLE_GENERAL_ADMIN'),
  makeMockEmployee(118, '홍길동', 'BN001', 'gdhong@bn.com', '010-1111-1111', 'MANAGER', 'ROLE_GENERAL_ADMIN'),
  makeMockEmployee(119, '홍길동', 'BN001', 'gdhong@bn.com', '010-1111-1111', 'MANAGER', 'ROLE_GENERAL_ADMIN'),
  makeMockEmployee(120, '홍길동', 'BN001', 'gdhong@bn.com', '010-1111-1111', 'MANAGER', 'ROLE_GENERAL_ADMIN'),
  makeMockEmployee(121, '홍길동', 'BN001', 'gdhong@bn.com', '010-1111-1111', 'MANAGER', 'ROLE_GENERAL_ADMIN'),
  makeMockEmployee(122, '홍길동', 'BN001', 'gdhong@bn.com', '010-1111-1111', 'MANAGER', 'ROLE_RESPONSIBLE_ADMIN'),
];

// 가맹점 계정
function makeMockFranchiseAccount(code, id, email, contact, franchiseName) {
  return { code, id, email, contact, franchiseName };
}
export const mockupFranchiseAccounts = [
  makeMockFranchiseAccount(100, 'BN001', 'gdhong@bn.com', '010-1111-1111', '안양점'),
  makeMockFranchiseAccount(101, 'BN001', 'gdhong@bn.com', '010-1111-1111', '안산점'),
  makeMockFranchiseAccount(102, 'BN001', 'gdhong@bn.com', '010-1111-1111', '안산점'),
  makeMockFranchiseAccount(103, 'BN001', 'gdhong@bn.com', '010-1111-1111', '강북점'),
  makeMockFranchiseAccount(104, 'BN001', 'gdhong@bn.com', '010-1111-1111', '안산점'),
  makeMockFranchiseAccount(105, 'BN001', 'gdhong@bn.com', '010-1111-1111', '안산점'),
  makeMockFranchiseAccount(106, 'BN001', 'gdhong@bn.com', '010-1111-1111', '안산점'),
  makeMockFranchiseAccount(107, 'BN001', 'gdhong@bn.com', '010-1111-1111', '미아점'),
  makeMockFranchiseAccount(108, 'BN001', 'gdhong@bn.com', '010-1111-1111', '안산점'),
  makeMockFranchiseAccount(109, 'BN001', 'gdhong@bn.com', '010-1111-1111', '안산점'),
  makeMockFranchiseAccount(122, 'BN001', 'gdhong@bn.com', '010-1111-1111', '종암점'),
];

// 가맹점
function makeMockFranchise(code, franchiseName, address, city, province, businessNumber, ceo, contact, createdAt) {
  return { code, franchiseName, address, city, province, businessNumber, ceo, contact, createdAt };
}

export const mockupFranchises = [
  makeMockFranchise(
    1,
    'CoffeeHouse A',
    '123 Main St',
    'Seoul',
    'Seoul',
    '111-111-111',
    '노다민',
    '010-1234-5678',
    '2024-01-01 08:00:00',
  ),
  makeMockFranchise(
    2,
    'CoffeeHouse B',
    '456 Maple St',
    'Busan',
    'Busan',
    '111-111-222',
    '양현진',
    '010-2345-6789',
    '2024-01-02 09:00:00',
  ),
  makeMockFranchise(
    3,
    'CoffeeHouse C',
    '789 Oak St',
    'Incheon',
    'Incheon',
    '111-111-333',
    '용길한',
    '010-3456-7890',
    '2024-01-03 10:00:00',
  ),
  makeMockFranchise(
    4,
    'CoffeeHouse D',
    '101 Pine St',
    'Daegu',
    'Gyeongsang',
    '111-111-444',
    '장호정',
    '010-4567-8901',
    '2024-01-04 11:00:00',
  ),
  makeMockFranchise(
    5,
    'CoffeeHouse E',
    '202 Cedar St',
    'Gwangju',
    'Jeolla',
    '111-111-555',
    '정준서',
    '010-5678-9012',
    '2024-01-05 12:00:00',
  ),
];
