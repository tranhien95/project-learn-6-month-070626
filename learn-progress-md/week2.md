# Week 2 Summary - Request Lifecycle

## Topics Learned

### Middleware

Mục đích:

* Chạy trước Controller
* Xử lý logic chung
* Logging
* Request Tracking

Ví dụ:

* Logger Middleware
* Request ID Middleware

Điểm cần nhớ:

* Không biết user hiện tại là ai
* Không phù hợp để phân quyền

---

### Guard

Mục đích:

* Quyết định request có được đi tiếp hay không

Ví dụ:

* JWT Auth Guard
* Role Guard

Điểm cần nhớ:

* Trả về true → đi tiếp
* Trả về false → chặn request

Interface:

```ts
CanActivate
```

---

### ExecutionContext

Mục đích:

* Truy cập request hiện tại

Ví dụ:

```ts
const request =
  context.switchToHttp().getRequest();
```

Điểm cần nhớ:

* Guard sử dụng rất nhiều
* Interceptor sử dụng rất nhiều

---

### Reflector

Mục đích:

* Đọc metadata từ Decorator

Ví dụ:

```ts
@Roles('admin')
```

Guard đọc:

```ts
reflector.get(...)
```

Điểm cần nhớ:

* Role Guard gần như luôn dùng Reflector

---

### Pipe

Mục đích:

* Validate dữ liệu
* Transform dữ liệu

Ví dụ:

```ts
ParseIntPipe
ValidationPipe
```

Điểm cần nhớ:

* Chạy trước Controller

---

### Interceptor

Mục đích:

* Xử lý trước hoặc sau Controller

Ví dụ:

* Logging
* Response Mapping
* Cache

Điểm cần nhớ:

* Có thể thay đổi response

---

### Exception Filter

Mục đích:

* Bắt lỗi tập trung

Ví dụ:

```ts
BadRequestException
```

Điểm cần nhớ:

* Chuẩn hóa error response

---

# Request Lifecycle

Thứ tự thực tế:

Request

↓

Middleware

↓

Guard

↓

Pipe

↓

Controller

↓

Service

↓

Interceptor

↓

Response

↓

Exception Filter (nếu có lỗi)

---

# CRM Features Built

## Logger Middleware

Đã làm:

* Log Method
* Log URL
* Log Timestamp

---

## Auth Guard

Đã làm:

* Kiểm tra Authorization Header

---

## Validation Pipe

Đã làm:

* Validate request data

---

## Response Interceptor

Đã làm:

* Format response

Ví dụ:

```json
{
  "success": true,
  "data": {}
}
```

---

## Global Exception Filter

Đã làm:

* Handle errors tập trung

---

# Những điều quan trọng nhất của Week 2

1. Hiểu Request Lifecycle

2. Hiểu Guard khác Middleware

3. Hiểu Pipe khác DTO

4. Hiểu Interceptor khác Filter

5. Biết dùng ExecutionContext

6. Biết dùng Reflector

---

# Interview Questions

## Middleware

### Câu 1

Middleware là gì?

---

### Câu 2

Middleware chạy trước hay sau Guard?

---

### Câu 3

Khi nào dùng Middleware thay vì Guard?

---

## Guard

### Câu 4

Guard là gì?

---

### Câu 5

Guard khác Middleware như thế nào?

---

### Câu 6

CanActivate trả về gì?

---

### Câu 7

Auth Guard thường kiểm tra gì?

---

## ExecutionContext

### Câu 8

ExecutionContext là gì?

---

### Câu 9

Làm sao lấy request từ ExecutionContext?

---

### Câu 10

ExecutionContext được dùng nhiều ở đâu?

---

## Reflector

### Câu 11

Reflector dùng để làm gì?

---

### Câu 12

Role Guard sử dụng Reflector như thế nào?

---

### Câu 13

Metadata là gì?

---

## Pipe

### Câu 14

Pipe là gì?

---

### Câu 15

ValidationPipe hoạt động thế nào?

---

### Câu 16

Pipe chạy trước hay sau Guard?

---

### Câu 17

ParseIntPipe dùng để làm gì?

---

## Interceptor

### Câu 18

Interceptor là gì?

---

### Câu 19

Interceptor khác Middleware thế nào?

---

### Câu 20

Interceptor có thể thay đổi response không?

---

## Exception Filter

### Câu 21

Exception Filter là gì?

---

### Câu 22

Filter khác Interceptor thế nào?

---

### Câu 23

Tại sao nên dùng Global Exception Filter?

---

# Self Assessment

Middleware: ___ /10

Guard: ___ /10

ExecutionContext: ___ /10

Reflector: ___ /10

Pipe: ___ /10

Interceptor: ___ /10

Filter: ___ /10

Request Lifecycle: ___ /10

Overall Week 2: ___ /10

---

# Week 2 Completion Criteria

Được xem là hoàn thành khi:

* Có thể vẽ Request Lifecycle từ trí nhớ
* Trả lời được ít nhất 20/23 câu hỏi
* Tự code Auth Guard không cần xem tài liệu
* Tự code Validation Pipe không cần xem tài liệu
* Tự code Response Interceptor cơ bản
* Tự code Global Exception Filter cơ bản
