#include <stdio.h>
int main()
{

    int a[10], n, p, e;

    printf("Enter Number Of Elements To Insert Array :");
    scanf("%d",&n);

    for (int i = 0; i < n; i++)
    {

        printf("\nEnter Element at %d index :", i);
        scanf("%d",&e);
        a[i]=e;

    }

    for (int i = 0; i < n; i++)
    {
        printf("%d",a[i]);
    }
    printf("\nEnter New Element to insert same Array :");
    scanf("%d",&e);
    printf("Enter postion of a index value:");
    scanf("%d",&p);

        for (int i = 0; i < n; i++)
    {
        printf("%d",a[i]);
    }
}