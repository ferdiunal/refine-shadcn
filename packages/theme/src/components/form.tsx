"use client";

import type { SaveButtonProps } from "@/types";
import { Button, Card, CardContent, CardFooter, Form as FormUI } from "@/ui";
import {
    useBack,
    useNavigation,
    useParsed,
    useRouterType,
    type BaseRecord,
    type HttpError,
} from "@refinedev/core";
import type { UseFormReturnType } from "@refinedev/react-hook-form";
import {
    FC,
    useRef,
    type DetailedHTMLProps,
    type FormHTMLAttributes,
    type PropsWithChildren,
} from "react";
import { type FieldValues } from "react-hook-form";
import { SaveButton } from "../buttons";

type NativeFormProps = Omit<
    DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
    "onSubmit"
>;

export type FormProps<
    TQueryFnData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
    TVariables extends FieldValues = FieldValues,
    TContext extends object = {},
    TData extends BaseRecord = TQueryFnData,
    TResponse extends BaseRecord = TData,
    TResponseError extends HttpError = TError,
> = PropsWithChildren &
    UseFormReturnType<
        TQueryFnData,
        TError,
        TVariables,
        TContext,
        TData,
        TResponse,
        TResponseError
    > & {
        formProps?: NativeFormProps;
        isWatchable?: boolean;
        hideCancel?: boolean;
    };

export const Form = <
    TQueryFnData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
    TVariables extends FieldValues = FieldValues,
    TContext extends object = {},
    TData extends BaseRecord = TQueryFnData,
    TResponse extends BaseRecord = TData,
    TResponseError extends HttpError = TError,
>({
    formProps,
    isWatchable,
    saveButtonProps,
    ...props
}: FormProps<
    TQueryFnData,
    TError,
    TVariables,
    TContext,
    TData,
    TResponse,
    TResponseError
>) => {
    const watchable = useRef<boolean>(false);
    const { resource: _resource, action } = useParsed();
    const routerType = useRouterType();
    const back = useBack();
    const { goBack } = useNavigation();

    const onBack =
        action !== "list" || typeof action !== "undefined"
            ? routerType === "legacy"
                ? goBack
                : back
            : undefined;

    if (isWatchable && !watchable.current) {
        watchable.current = true;
        props.watch();
    }

    const onSubmit = props.handleSubmit((_data: TVariables) => {
        props.refineCore.onFinish(props.getValues()).then();
    });

    return (
        <FormUI {...props}>
            <form {...formProps} onSubmit={onSubmit}>
                <Card className="border-border/40 shadow-sm">
                    <CardContent className="pt-6 space-y-4">
                        {props.children}
                    </CardContent>

                    <CardFooter className="flex justify-end gap-x-4">
                        {!props.hideCancel && (
                            <Button
                                type="button"
                                onClick={onBack}
                                disabled={props.refineCore.formLoading}
                                variant="outline"
                            >
                                Cancel
                            </Button>
                        )}

                        <SaveButton
                            type="submit"
                            loading={props.refineCore.formLoading}
                            {...saveButtonProps}
                        />
                    </CardFooter>
                </Card>
            </form>
        </FormUI>
    );
};
