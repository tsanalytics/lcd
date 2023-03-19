LCD1IN8.LCD_Init()
LCD1IN8.LCD_Clear()
LCD1IN8.LCD_SetBL(6)
LCD1IN8.DrawCircle(
82,
63,
15,
38581,
DRAW_FILL.DRAW_EMPTY,
DOT_PIXEL.DOT_PIXEL_3
)
LCD1IN8.DisString(
63,
104,
"Tiaan",
53908
)
LCD1IN8.LCD_Display()
basic.forever(function () {
	
})
